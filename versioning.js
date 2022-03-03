async function main() {
    const fs = require("fs");
    const readline = require("readline");
    const process = require("process");
    const rl = readline.createInterface({
        input: process.stdin, 
        output: process.stdout
    });

    let file_content = fs.readFileSync("./docs/.vuepress/styles/index.scss", {encoding: "utf-8"});
    let version_regex = new RegExp(/content: "- Krunker (.*?)";/i)
    let current_version = file_content.match(version_regex)[1];

    rl.question(`What version do you want to build this website as? (${current_version}) `, function(version){
        version ||= current_version;
        file_content = file_content.replace(version_regex, `content: "- Krunker ${version}";`);
        fs.writeFile("./docs/.vuepress/styles/index.scss", file_content, () => {});
        rl.close();
    });
}

main();