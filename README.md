# PPP Data Tool
- Tool to read PPP CSVs and generate JSON

[Table of PPP loans exceeding 150k](https://airtable.com/shrGClwklrHvQ1LZy)
    - big datasets for a state had to be split to multiple views
- Table of PPP loans < 150k : coming soon

## SBA Download Issue
- The downloadUrl in constants.js might not work because SBA refreshes download session or something
- To fix this issue and get the right download link, go to the [SBA Download Link](https://sba.app.box.com/s/tvb0v5i57oa8gc6b5dcm9cyw7y2ms6pp), open a Developer Console and inspect the network when you click "Download" -that URL fetching the download is the one to replace for downloadUrl

![Image of Simple CLI Tool](https://res.cloudinary.com/dnguyen/image/upload/v1594193917/code-projects/Git/ppp-tool-image_brl15y.png)

![Image of Simple CLI generating data for US States](https://res.cloudinary.com/dnguyen/image/upload/v1594246304/code-projects/Git/states_jonjcc.png)

## Using Tool
- `npm i` : Install dependencies first
- `npm start` : Start CLI tool
- Make sure following dirs are in the data dir:
    - csv
    - json
    - raw
- Pick option for operation to do

## Loading to Airtable
- Following CSV files exceed 5MB : CA, FL, IL, NY, TX
- Split the files using split-data/split.py and use those to upload

## DONE
- CLI tool basics
- download zip by url
- extract zip and save to data repo
- parse CSV and generate JSON for PPP files of bailous > 150k
- parse CSVs and generate JSON files for PPP files of bailouts > 150k

## TODO
- parse CSVs and generate JSON files for PPP files of bailouts < 150k