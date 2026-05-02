import express from 'express';
import cors from 'cors';
import YahooFinance from 'yahoo-finance2';

const app = express();
app.use(cors());

const yahooFinance = new YahooFinance();

// Convert Google Finance format (NSE:ITC or ITC:NSE) to Yahoo Finance format (ITC.NS)
const toYahooTicker = (googleTicker) => {
  let ticker = googleTicker.trim().toUpperCase();
  if (ticker.includes(':NSE') || ticker.startsWith('NSE:')) {
    return ticker.replace(':NSE', '').replace('NSE:', '') + '.NS';
  }
  if (ticker.includes(':BOM') || ticker.startsWith('BOM:')) {
    return ticker.replace(':BOM', '').replace('BOM:', '') + '.BO';
  }
  return ticker;
};

app.get('/api/live-prices', async (req, res) => {
  const { tickers } = req.query; 
  if (!tickers) return res.status(400).json({ error: 'No tickers provided' });

  const tickerArray = tickers.split(',');
  const results = {};

  try {
    const promises = tickerArray.map(async (originalTicker) => {
      if (!originalTicker || originalTicker === 'undefined') return;
      try {
        const yfTicker = toYahooTicker(originalTicker);
        const quote = await yahooFinance.quote(yfTicker);
        if (quote && quote.regularMarketPrice) {
          results[originalTicker] = quote.regularMarketPrice;
        }
      } catch (err) {
        console.error(`Failed to fetch for ${originalTicker}:`, err.message);
      }
    });

    await Promise.all(promises);
    res.json(results);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: 'Server error fetching prices' });
  }
});

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Live Price API running on port ${PORT}`));
