// Compile scripts/*.jsx → dist/*.js so the landing page can load plain JS
// (no Babel-in-browser, no SRI flakiness, fast first paint).
import { transformFileSync } from "@babel/core";
import { mkdirSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const SRC = "scripts";
const OUT = "dist";

mkdirSync(OUT, { recursive: true });

const sources = readdirSync(SRC).filter((f) => f.endsWith(".jsx"));
for (const file of sources) {
  const inPath = join(SRC, file);
  const result = transformFileSync(inPath, {
    presets: [["@babel/preset-react", { runtime: "classic" }]],
    babelrc: false,
    configFile: false,
  });
  const outPath = join(OUT, file.replace(/\.jsx$/, ".js"));
  writeFileSync(outPath, result.code);
  console.log(`  ${inPath} → ${outPath}`);
}
console.log(`built ${sources.length} files`);
