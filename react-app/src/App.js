import {useState, useEffect} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [usd, setUsd] = useState(0);
  const [bt, setBt] = useState(0);
  const onChangeInput = (event) => {
    setUsd(event.target.value);
    const opValue = document.getElementById("select");
    const price = coins[opValue.options[opValue.selectedIndex].value].quotes.USD.price;
    setBt(Math.floor(usd / price));
  };
  const onChangeOption = (event) => {
    const usd = document.getElementById("input").value;
    const price = coins[event.target.selectedIndex].quotes.USD.price;
    setBt(Math.floor(usd / price));
  }
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(res => res.json())
    .then(json => {
      setCoins(json);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : 
        <div>
        <h4>USD TO BTC</h4>
        <input id="input" value={usd} onChange={onChangeInput} type="number" placeholder="write USD"/>USD : {bt}EA
        <hr />
        <select id="select" onChange={onChangeOption}>
          {coins.map((coin, i) => <option value={i} key={coin.id}>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD</option>)}
        </select>
        </div>
      }
    </div>
  );
}

export default App;