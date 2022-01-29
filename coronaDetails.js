const request = require('request')
const cheerio = require('cheerio')
    // console.error('before')

request('https://www.worldometers.info/coronavirus/', cb);

function cb(error, response, html) {
    if (error) {
        console.error('error')
    } else {
        handleHtml(html);
    }
}
// cheerio --> cheerio gives us a selector tool, using a selector tool hum html code me kch bhi search kr skte hai
function handleHtml(html) {
    let selectorTool = cheerio.load(html)
        // console.log(selectorTool)

    let contentArr = selectorTool('.maincounter-number')
        // console.log(contentArr)

    // converting the above contentArr data into text (for this cheerio gives us .text function )  Without selector tool we can not use text function(or any cheerio function) as here all the cheerio functions are loaded to selector tool


    // Using for loop to access data

    // for (let i = 0; i < contentArr.length; i++) {
    //     let data = selectorTool(contentArr[i]).text()
    //     console.log('Total Cases: ', data)
    // }

    console.log('Recent Corona Cases details of India:')
    let totalCases = selectorTool(contentArr[0]).text()
    console.log('Total Cases: ', totalCases)

    let totalDeaths = selectorTool(contentArr[1]).text()
    console.log('Total Deaths: ', totalDeaths)

    let totalRecoveries = selectorTool(contentArr[2]).text()
    console.log('Total Recoveries: ', totalRecoveries)
}




// console.error('after')