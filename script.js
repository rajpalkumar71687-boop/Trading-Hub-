function calculateRisk(){

let balance =
parseFloat(document.getElementById("balance").value);

let risk =
parseFloat(document.getElementById("risk").value);

let amount = balance * risk / 100;

document.getElementById("result").innerHTML =
"Maximum Risk = $" + amount.toFixed(2);

}
const API_KEY = "d93oaqhr01qj7hdf1440d93oaqhr01qj7hdf144g";

async function loadBitcoinPrice() {
  try {
    const response = await fetch(
      `https://finnhub.io/api/v1/quote?symbol=BINANCE:BTCUSDT&token=${API_KEY}`
    );

    const data = await response.json();

    document.getElementById("btc-price").textContent =
      "$" + data.c;
  } catch (err) {
    document.getElementById("btc-price").textContent = "Error";
    console.error(err);
  }
}

loadBitcoinPrice();
setInterval(loadBitcoinPrice, 30000);
