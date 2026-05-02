import axios from 'axios';

async function test() {
  const { data } = await axios.get('https://www.google.com/finance/quote/ITC:NSE', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
    }
  });
  
  // Find lines containing "ITC" and some numbers or "YMlKec"
  const lines = data.split('\n');
  const priceLines = lines.filter(l => l.includes('YMlKec fxKbKc') || l.includes('₹') || l.includes('data-last-price'));
  console.log("Found lines:", priceLines.slice(0, 5));
}
test();
