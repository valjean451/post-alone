const fs = require('fs');


const readDB = (file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            return parsedData;
        }
    })
}

const writeDB = (content, file) => {
    fs.writeFile(file, JSON.stringify(content), (err) =>
    err ? console.error(err) : console.log(`Data written to ${file}`));
}

const updateDB = (content, file) => {
    const currentData = readDB(file);
    currentData.push(content)
    writeDB(content, file);
}

module.exports = {readDB, writeDB, updateDB}