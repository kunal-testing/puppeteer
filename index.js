const puppeteerManager = require('./puppeteerManager');

const main = async() => {
    try {
        const $ = await puppeteerManager.crawlWithPuppeteer(
          'B0B6J6PMDG',
          'US'
        );
        console.log($("#title").text());
      } catch (puppeteerError) {
        console.error(puppeteerError);
        throw puppeteerError;
      }
};

main();
