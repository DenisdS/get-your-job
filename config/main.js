const args = require("args-parser")(process.argv);

// PROJECT

const packageJson = require("../package.json")

module.exports.PROJECT_VERSION = packageJson.version;

const manufacturerTemplate = value => `${module.exports.PROJECT_VERSION}-${value}`;

// HOST

module.exports.URL =  {
}
