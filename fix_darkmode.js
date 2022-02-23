const { promisify } = require('util');
const { resolve, extname } = require('path');
const fs = require('fs');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

async function getFiles(dir) {
    const subdirs = await readdir(dir);
    const files = await Promise.all(subdirs.map(async (subdir) => {
        const res = resolve(dir, subdir);
        return (await stat(res)).isDirectory() ? getFiles(res) : res;
    }));
    return files.reduce((a, f) => a.concat(f), []);
}

getFiles("docs/.vuepress/dist")
    .then(files => {
        for (const file of files) {
            if (extname(file) == ".html"){
                let data = fs.readFileSync(file, "utf8");
                data = data.replace("<html lang=\"en-US\">", "<html lang=\"en-US\" class=\"dark\">");
                fs.writeFile(file, data, "utf-8", () => {})
            }
        }
    })
    .catch(e => console.error(e));

console.log("fixed darkmode");