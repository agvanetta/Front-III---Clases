import './App.css';
import Api from './components/Api';
import Apiv2 from './components/Apiv2';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Apiv2/>
        <ContadorHooks titulo="CLICKS" />
        <ScrollHooks/>
      </header>
    </div>
  );
}

export default App;
