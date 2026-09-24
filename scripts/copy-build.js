import fs from "fs";
import path from "path";

const src = path.resolve("frontend/dist");
if (fs.existsSync(src)) {
  fs.cpSync(src, path.resolve("dist"), { recursive: true });
  fs.cpSync(src, path.resolve("public"), { recursive: true });
  console.log("Successfully copied frontend/dist to dist and public directories.");
} else {
  console.warn("frontend/dist does not exist, skipping copy.");
}
