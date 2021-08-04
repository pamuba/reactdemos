import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Greet  name="Bruce"  heroName="Batman">
          <p>lorem5 lorem5 lorem5 lorem5 lorem5</p>
          <button>CLICK</button>
        </Greet>
        <Greet  name="Clark"  heroName="Superman"></Greet>
        <Greet  name="Diana"  heroName="Wonder Women"></Greet> */}
        <Welcome name="Bruce"  heroName="Batman"></Welcome>
      </header>
    </div>
  );
}

export default App;
