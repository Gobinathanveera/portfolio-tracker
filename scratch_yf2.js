import { YahooFinance } from 'yahoo-finance2';

async function test() {
  try {
    const yf = new YahooFinance();
    const quote = await yf.quote('ITC.NS');
    console.log(quote.regularMarketPrice);
  } catch (e) {
    console.error(e.message);
  }
}
test();
