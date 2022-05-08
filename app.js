// npm - global command comes with node
// local dependency - use only in this project
// npm i <package name>
// global dependency - use in any project
// npm install -g <package name>
// sudo npm install -g <package name> (macOS or ubuntu ?)
// package.json - manifest file (stores important info about project/package)
// manual approach 
// npm init (step by step, press Enter to skip)
// npm init -y (everything default)

const _ = require('lodash');
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);
