const { writeFile } = require("fs");
console.log('The beginning:')
writeFile("./temporary/output.txt", "Hey how is everything?", (err, result) => {
    if(err) {
        console.log(err)
    } else {
        console.log('First line written!')
        writeFile("./temporary/output.txt", "I hope everything is okay", { flag : 'a' },(err, result) => {
            if(err) {
                console.log(err)
            } else {
                console.log('Second Line written')
                writeFile("./temporary/output.txt", "How is your day going so far", { flag : 'a' },(err, result) => {
                    if(err) {
                        console.log(err)
                    } else {
                        console.log('Third Line written as well')
                    }
                })
            }
        })
    }
})
