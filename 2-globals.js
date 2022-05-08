// Globals
// __dirname - path to current directory
// __filename - file name
// require - function to use/call modules (CommonJS)
// module - info about current module
// process - info about env where the program is being executed

console.log(__dirname);
setInterval(() => {
    console.log('Hello world');
}, 1000);