const fs = require("fs");
const glob = require("glob");
const path = require("path");

const FULL_PATH = `./src/pages/**/main.js`;

module.exports = function getEntries() {
  const entries = {};
  const fullPathSet = new Set();
  const pathArr = [];
  const startNames = process.env.START_PAGES || "";

  if (startNames === "") {
    pathArr.push(FULL_PATH);
  } else {
    startNames.split(" ").forEach((setPath) => {
      pathArr.push(`./src/pages/${setPath}/**/main.js`);
    });
  }
  pathArr.forEach((path) => {
    glob.sync(path).forEach((entry) => {
      fullPathSet.add(entry);
    });
  });

  console.log("############所有页面############");

  fullPathSet.forEach((entry) => {
    console.log(entry);
    let filename = entry
      .split("./src/pages/")[1]
      .split(".")[0]
      .replace(/\/main$/, "/index");
    let config = {};
    const configPath = path.resolve(
      process.cwd(),
      entry.replace(/main\.js$/, "__config.js")
    );

    if (fs.existsSync(configPath)) {
      config = require(path.relative(__dirname, configPath));
    }
    entries[filename] = Object.assign(
      {
        entry: entry,
        favicon: path.resolve(process.cwd(), "./public/favicon.ico"),
        filename: `${filename}.html`,
        title: "",
      },
      config
    );
  });

  return entries;
};
