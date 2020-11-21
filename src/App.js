import './App.css';

import Converter from './components/Converter';

function App() {
  return (
    <div className="App">
      <Converter currencyA="AUD" currencyB="USD"></Converter>
    </div>
  );
}

export default App;
