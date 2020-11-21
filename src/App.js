import './App.css';

import Converter from './components/Converter';

function App() {
  return (
    <div className="App">
      <div className="row">
        <h1>Currency Converter</h1>
      </div>
      <div className="row">
        <Converter currencyA="USD" currencyB="AUD"></Converter>
      </div>
    </div>
  );
}

export default App;
