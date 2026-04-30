import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import nodemailer from "nodemailer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const app = express();
const port = Number(process.env.PORT ?? 10000);

app.use(express.json({ limit: "32kb" }));

const requiredEnv = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "CONTACT_TO", "CONTACT_FROM"];

function missingMailConfig() {
  return requiredEnv.filter((key) => !process.env[key]);
}

function cleanText(value, maxLength) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function formatReplyTo(name, email) {
  const safeName = name.replace(/"/g, "'");
  return `"${safeName}" <${email}>`;
}

function createTransporter() {
  const secure = String(process.env.SMTP_SECURE ?? "false").toLowerCase() === "true";

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

app.post("/api/contact", async (request, response) => {
  const missing = missingMailConfig();

  if (missing.length > 0) {
    response.status(500).json({ error: "Mail service is not configured." });
    return;
  }

  const requestType = cleanText(request.body?.requestType, 80);
  const name = cleanText(request.body?.name, 120);
  const email = cleanText(request.body?.email, 160);
  const message = cleanText(request.body?.message, 4000);

  if (!name || !isEmail(email) || !message) {
    response.status(400).json({ error: "Invalid contact request." });
    return;
  }

  const subject = requestType || "Nuova richiesta";

  try {
    const transporter = createTransporter();

    await transporter.sendMail({
      from: process.env.CONTACT_FROM,
      to: process.env.CONTACT_TO,
      replyTo: formatReplyTo(name, email),
      subject,
      text: message,
    });

    response.status(200).json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email", error);
    response.status(502).json({ error: "Unable to send email." });
  }
});

app.use(express.static(distDir));

app.get(/.*/, (_request, response) => {
  response.sendFile(path.join(distDir, "index.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Portfolio server listening on port ${port}`);
});
