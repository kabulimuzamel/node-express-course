const { createReadStream } = require('fs');

const stream = createReadStream('../content/big.txt', { highWaterMark: 20, encoding: 'utf8' });

let counter = 0;


stream.on('data', (data) => {
    console.log(data);
    counter += 1;
})
stream.on('end', () => {
    console.log(`# chunks received: ${counter}`)
})

stream.on('error', (err) => {
    console.log(err)
})
