import './App.css';
import ClickCounter from './components/ClickCounter';
import Clicker from './components/Clicker';
import HoverClick from './components/HoverClick';

function App() {
  return (
    <div >
      {/* <ClickCounter></ClickCounter> */}
      {/* <HoverClick></HoverClick> */}
      <Clicker myFn={(count, increment) => (
        <ClickCounter count={count} increment={increment} />
      )} />
      <Clicker myFn={(count, increment) => (
        <HoverClick count={count} increment={increment} />
      )} />

    </div>
  );
}

export default App;
