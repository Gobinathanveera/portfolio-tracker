import yahooFinance from 'yahoo-finance2';

async function test() {
  try {
    const quote = await yahooFinance.quote('ITC.NS');
    console.log("ITC.NS quote:");
    console.log("regularMarketPrice:", quote.regularMarketPrice);
    console.log("regularMarketTime:", quote.regularMarketTime);
    
    const quote2 = await yahooFinance.quote('SOUTHBANK.NS');
    console.log("\nSOUTHBANK.NS quote:");
    console.log("regularMarketPrice:", quote2.regularMarketPrice);
  } catch (err) {
    console.error(err);
  }
}
test();
