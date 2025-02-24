const fs = require('fs');

// Reading file asynchronously

fs.readFile('./texts/read.txt', 'utf-8', (error, data)=>{
    if(error){
        throw Error('Error reading text')
    }
    console.log(data);

    // Writing text asynchronously

    fs.writeFile('./texts/read2.txt', data, 'utf-8', (error) => {
        if(error){
            throw Error("Error writing text")
        }
    })
})

console.log("Testing asynchronous")