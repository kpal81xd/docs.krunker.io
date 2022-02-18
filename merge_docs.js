const fs = require("fs");
const path = require("path");

let relative = "./docs/unmerged/";
let dir = fs.readdirSync(relative);
let merge = `---
sidebar: "auto"
---
`;

for (file of dir){
    if (file == "README.md") continue;
    var data = fs.readFileSync(path.join(relative, file), "utf8");
    data.replace(/^# [a-zA-Z]*\b/g, "");
    merge += data + "\n\n";
}

merge += `# Table of contents

[[toc]]`;

fs.writeFile("./docs/README.md", merge, "utf-8", () => {})

console.log("Merged all docs together");