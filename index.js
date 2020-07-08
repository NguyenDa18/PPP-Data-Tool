const clear = require('clear')
const chalk = require('chalk')
const figlet = require('figlet')
const inquirer = require('inquirer')
const { settingsOptions } = require('./constants')
const { downloadZip } = require('./downloadZip')
const { extractZip } = require('./extractZip')
const { generateData } = require('./generateData')

clear()

console.log(chalk.cyan(
    figlet.textSync('PPP Data Tool', { horizontalLayout: 'full' })))

inquirer
    .prompt([
        {
            type: 'list',
            name: 'setting',
            message: 'What operation do you want to do?',
            choices: [settingsOptions.downloadZip, settingsOptions.extractZip, settingsOptions.generateStateData],
        },
    ])
    .then(answer => {
        if (answer.setting === settingsOptions.downloadZip) {
            downloadZip()
        }
        else if (answer.setting === settingsOptions.extractZip) {
            extractZip()
        }
        else if (answer.setting === settingsOptions.generateStateData) {
            generateData()
        }
        else {
            console.log('else')
        }
    });