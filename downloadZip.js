const fs = require('fs')
const request = require('request')
const { outputFile, downloadUrl } = require('./constants')

exports.downloadZip = () => {
    request({ url: downloadUrl, encoding: null }, (err, resp, body) => {
        if (err) throw err;
        fs.writeFile(outputFile, body, (err) => {
            console.log("Zip file generated!");
        });
    });
}