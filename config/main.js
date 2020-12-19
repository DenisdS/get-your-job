const args = require("args-parser")(process.argv);

// PROJECT

const packageJson = require("../package.json")

module.exports.PROJECT_VERSION = packageJson.version;

// HOST
module.exports.URL =  {
}
