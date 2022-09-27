const fs = require("fs");
const puppeteerManager = require('./puppeteerManager');

const main = async() => {
    try {
        const $ = await puppeteerManager.crawlWithPuppeteer(
          'B0B6J6PMDG',
          'US'
        );
        fs.writeFileSync('test.txt', 'testing: ');
        fs.writeFileSync('test.txt', $("#title").text());
      } catch (puppeteerError) {
        console.error(puppeteerError);
        throw puppeteerError;
      }
};

main();
