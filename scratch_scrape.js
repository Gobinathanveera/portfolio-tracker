import axios from 'axios';
import * as cheerio from 'cheerio';

async function testScrape() {
  try {
    const { data } = await axios.get('https://www.google.com/finance/quote/ITC:NSE', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    });
    const $ = cheerio.load(data);
    
    // Attempt 1
    const price1 = $('div[data-last-price]').first().attr('data-last-price');
    console.log('Attempt 1 (data-last-price):', price1);
    
    // Attempt 2
    const price2 = $('.YMlKec.fxKbKc').first().text();
    console.log('Attempt 2 (class):', price2);

    // Attempt 3
    const price3 = $('meta[itemprop="price"]').attr('content');
    console.log('Attempt 3 (meta):', price3);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

testScrape();
