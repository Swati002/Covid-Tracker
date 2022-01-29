const request = require('request')
const cheerio = require('cheerio')

request('https://www.worldometers.info/coronavirus/', cb);

function cb(error, response, html) {
    if (error) {
        console.error('error')
    } else {
        handleHtml(html);
    }
}
function handleHtml(html) {
    let selectorTool = cheerio.load(html)

    let contentArr = selectorTool('.maincounter-number')
      
    console.log('Recent Corona Cases details of India:')
    let totalCases = selectorTool(contentArr[0]).text()
    console.log('Total Cases: ', totalCases)

    let totalDeaths = selectorTool(contentArr[1]).text()
    console.log('Total Deaths: ', totalDeaths)

    let totalRecoveries = selectorTool(contentArr[2]).text()
    console.log('Total Recoveries: ', totalRecoveries)
}
