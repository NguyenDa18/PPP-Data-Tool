const extract = require('extract-zip')
const path = require('path')

const source = path.join(__dirname, '/output.zip')
const target = path.join(__dirname, '/data')

exports.extractZip = async () => {
    try {
        await extract(source, { dir: target })
        console.log('Extraction complete')
    } catch (err) {
        // handle any errors
    }
}

