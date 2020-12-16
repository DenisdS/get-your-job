'use strict';

const path = require('path');
const fs = require('fs');
const args = require("args-parser")(process.argv);

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

var devicePath = args.device;
var pathPrefix = args.pathPrefix || '';

module.exports = {
  dotenv: resolveApp('.env'),
  appBuild: resolveApp(`build${pathPrefix}/${devicePath}`),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveApp('src/Index.tsx'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveApp('src/setupTests.ts'),
  appNodeModules: resolveApp('node_modules'),
  appTsConfig: resolveApp('tsconfig.json'),
  publicUrl: resolveApp(`${pathPrefix}/${devicePath}/`),
  servedPath: resolveApp(`${pathPrefix}/${devicePath}/`)
};
