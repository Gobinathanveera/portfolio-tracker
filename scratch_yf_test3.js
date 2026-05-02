import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const yahooFinance = require('yahoo-finance2').default;

async function test() {
  try {
    const quote = await yahooFinance.quote('ITC.NS');
    console.log("ITC.NS quote:", quote.regularMarketPrice);
  } catch (err) {
    console.error(err);
  }
}
test();
