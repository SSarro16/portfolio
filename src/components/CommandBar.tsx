const commands = ["npm run dev", "npm run typecheck", "npm run lint", "npm run test", "npm run build"];

export function CommandBar() {
  return (
    <div className="command-bar motion-reveal motion-reveal-right" aria-label="Command bar">
      {commands.map((command) => (
        <span key={command}>$ {command}</span>
      ))}
    </div>
  );
}
