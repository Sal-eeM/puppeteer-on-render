const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
require("dotenv").config();

const scraped_quotes = [];

const scrapeLogic = async (res) => {

    const browser = await puppeteer.launch({
        args: [
            "--disable-setuid-sandbox", 
            "--no-sandbox",
            "--single-process",
            "--no-zygote",
        ],
        executablePath:process.env.NODE_ENV === "production" 
        ? process.env.PUPPETEER_EXECUTABLE_PATH
        : puppeteer.executablePath(),
    });

    try {

        // Launch the browser and open a new blank page
        const page = await browser.newPage();

        await page.goto('https://quotes.toscrape.com/');
    
        const pageData = await page.content();
        const $ = cheerio.load(pageData);
        const quotes = $('div.quote');
    
        async function scrapeQuotesFromPage() {
            quotes.each((index, element) => {
                const quote = $(element).find('span.text').text();
                const author = $(element).find('.author').text();
    
                scraped_quotes.push({
                    'Quote': quote,
                    'Author': author,
                });
            });
        }
    
        async function clickNextPage() {
            const nextPageButton = await page.$('li.next a');
            if (nextPageButton) {
                await sleep(5); // Introduce a delay between navigations
                await nextPageButton.click();
                await page.waitForSelector('div.quote'); // Wait for the new page to fully load
                await scrapeQuotesFromPage(); // Continue scraping on the new page
                await clickNextPage(); // Recursively click on the next page
            }
        }
    
        function sleep(seconds) {
            return new Promise(resolve => setTimeout(resolve, seconds * 1000));
        }
    
        await scrapeQuotesFromPage(); // Initial scraping on the first page
        await sleep(5)
        await clickNextPage(); // Start clicking on next pages

        console.log(scraped_quotes);
        res.send(scraped_quotes);

    } catch(e) {
    console.error(e);
    res.send(`Something went wrong while running Puppeteer: ${e}`)
        } finally {

        await browser.close();
    }
    

};


module.exports = { scrapeLogic };