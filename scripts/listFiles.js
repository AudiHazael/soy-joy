// scripts/listFiles.js

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 👇 Adjust path to the folder you're checking (e.g., BlogFive location)
const targetDir = path.join(__dirname, "../src/pages/Blogs");

function walk(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const relativePath = path.relative(__dirname, fullPath);
    console.log(" -", relativePath);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    }
  });
}

console.log("\n📁 Files under /src/pages/Blogs:\n");
walk(targetDir);
