const { writeFile, readFile } = require('fs').promises;

// Writing three lines

const writer = async () => {
    try {
        for (let i = 0; i < 1000; i++) {
            await writeFile('./temporary/temp.txt', 'Hey man how are you doing\n', { flag: 'a' })
        }
    } catch (error) {
        console.log(error)
    }
}


// Reading the file

const reader = async () => {
    try {
        const result = await readFile('./temporary/temp.txt', 'utf8');
        console.log(result)
    } catch(err) {
        console.log(err)
    }
}

const readWrite = async () => {
    await writer();
    await reader();
}

readWrite();