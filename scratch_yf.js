import yahooFinance from 'yahoo-finance2';

async function test() {
  try {
    const yf = yahooFinance.default ? yahooFinance.default : yahooFinance;
    console.log("Export keys:", Object.keys(yf));
    
    // Just try quoting
    const quote = await yf.quote('ITC.NS');
    console.log(quote.regularMarketPrice);
  } catch (e) {
    console.error(e.message);
  }
}
test();
