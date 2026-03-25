const fs = require("fs");
const path = require("path");

const projectRoot = process.cwd();
const srcRoot = path.join(projectRoot, "src");
const typescriptPath = path.join(
  process.env.APPDATA || "",
  "npm",
  "node_modules",
  "typescript",
);
const ts = require(typescriptPath);

const textFileExtensions = new Set([".js", ".jsx", ".ts", ".tsx", ".html"]);

function walk(dir, matcher, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".git") {
      continue;
    }

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath, matcher, results);
      continue;
    }

    if (matcher(fullPath)) {
      results.push(fullPath);
    }
  }

  return results;
}

const tsxFiles = walk(srcRoot, (filePath) => filePath.endsWith(".tsx"));

for (const tsxFile of tsxFiles) {
  const source = fs.readFileSync(tsxFile, "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: {
      jsx: ts.JsxEmit.Preserve,
      target: ts.ScriptTarget.ESNext,
      module: ts.ModuleKind.ESNext,
      moduleResolution: ts.ModuleResolutionKind.Bundler,
      allowJs: true,
      esModuleInterop: true,
      verbatimModuleSyntax: true,
    },
    fileName: tsxFile,
  }).outputText;

  const jsxFile = tsxFile.replace(/\.tsx$/, ".jsx");
  fs.writeFileSync(jsxFile, output, "utf8");
  fs.unlinkSync(tsxFile);
  console.log(`Converted ${path.relative(projectRoot, tsxFile)} -> ${path.relative(projectRoot, jsxFile)}`);
}

const filesToRewrite = walk(projectRoot, (filePath) => {
  const ext = path.extname(filePath);
  return textFileExtensions.has(ext) && !filePath.includes(`${path.sep}node_modules${path.sep}`);
});

for (const filePath of filesToRewrite) {
  const original = fs.readFileSync(filePath, "utf8");
  const updated = original.replace(/\.tsx\b/g, ".jsx");

  if (updated !== original) {
    fs.writeFileSync(filePath, updated, "utf8");
    console.log(`Updated references in ${path.relative(projectRoot, filePath)}`);
  }
}
