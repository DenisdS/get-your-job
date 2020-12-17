const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const CONFIG = require('../main');

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

global.window.innerWidth = 1280
global.window.innerHeight = 720

global.window.resizeTo = (width, height) => {
  global.window.innerWidth = width || global.window.innerWidth;
  global.window.innerHeight = height || global.window.innerHeight;
  global.window.dispatchEvent(new Event('resize'));
};

process.env = Object.assign({}, process.env, {})
process.env.PUBLIC_URL = ''
process.env.CONFIG = Object.assign({}, CONFIG, {
  PROJECT_VERSION: undefined
})

