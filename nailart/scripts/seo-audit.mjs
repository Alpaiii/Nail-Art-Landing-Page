import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");

function runCommand(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const proc = spawn(command, args, {
      cwd: projectRoot,
      stdio: "inherit",
      shell: true,
      ...options,
    });
    proc.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} exited with code ${code}`));
    });
  });
}

async function main() {
  console.log("🔨 Building project...");
  await runCommand("npm", ["run", "build"]);

  console.log("🚀 Starting preview server...");
  const preview = spawn("npm", ["run", "preview", "--", "--port", "4321"], {
    cwd: projectRoot,
    stdio: "inherit",
    shell: true,
  });

  await new Promise((r) => setTimeout(r, 3000));

  console.log("🔍 Running Lighthouse SEO audit...");
  try {
    await runCommand("npx", [
      "lighthouse",
      "http://localhost:4321",
      "--budget-path=./lighthouse-budget.json",
      "--output=html",
      "--output-path=./lighthouse-report.html",
      "--quiet",
    ]);
    console.log("✅ SEO audit complete! Report: lighthouse-report.html");
  } finally {
    preview.kill();
  }
}

main().catch((err) => {
  console.error("❌ Audit failed:", err.message);
  process.exit(1);
});