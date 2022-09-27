const cheerio = require('cheerio');
const puppeteer = require('puppeteer-extra');
const stealthPlugin = require('puppeteer-extra-plugin-stealth')();
puppeteer.use(stealthPlugin);

const urls = require('./urls.json');

class PuppeteerManager {
  constructor() {
    this.page = null;
  }

  async configPuppeteer() {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-gpu']
    });
    this.page = await browser.newPage();
  }

  async crawlWithPuppeteer(asin, country) {
    if (!this.page) {
      await this.configPuppeteer();
    }

    const url = `${urls[country].PDP}${asin}`;
    await this.page.goto(url);
    const content = await this.page.content();
    const $ = cheerio.load(content);
    return $;
  }
}
module.exports = new PuppeteerManager();
