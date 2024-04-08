const { writeFile, readFile } = require('fs').promises;


writeFile('./temporary/temp.txt', 'Hi nice to see you\n', { flag: 'a' })
	.then(() => {
		return writeFile('./temporary/temp.txt', 'Hey how you doing\n', {
			flag: 'a',
		})
	})
	.then(() => {
		return writeFile('./temporary/temp.txt', 'I am doing good\n', { flag: 'a' })
	})
	.then(() => {
		return readFile('./temporary/temp.txt', 'utf8')
	})
	.then((result) => {
		console.log(result)
	})
	.catch((error) => {
		console.log('An error occurred: ', error)
	})
