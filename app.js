const { createReadStream } = require('fs');
const stream = createReadStream('./content/big.txt');
// default 64 KB per chunk
// highWaterMark - control chunk size, count as byte
// const sstream = fs.createWriteStream('./content/big.txt', { encoding: 'utf8', highWaterMark: 90000 });
stream.on('data', (result) => {
 console.log(result);
});
stream.on('error', (err) => {
    console.log(err);
});