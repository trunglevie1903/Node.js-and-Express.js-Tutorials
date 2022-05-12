var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    // const text = fs.readFileSync('./content/big.txt', 'utf8');
    // res.end(text);
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
    fileStream.on('open', () => {
        fileStream.pipe(res);
    });
    fileStream.on('error', () => {
        res.end(err);
    });
}).listen(5000);

// const { createReadStream } = require('fs');
// const stream = createReadStream('./content/big.txt');
// // default 64 KB per chunk
// // highWaterMark - control chunk size, count as byte
// // const sstream = fs.createWriteStream('./content/big.txt', { encoding: 'utf8', highWaterMark: 90000 });
// stream.on('data', (result) => {
//     console.log(result);
// });
// stream.on('error', (err) => {
//     console.log(err);
// });