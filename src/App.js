import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import Welcome from './components/Welcome';
import UseState from './components/UseState';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

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
        {/* <Welcome name="Bruce"  heroName="Batman"></Welcome> */}

        {/* <Message></Message>

        <UseState></UseState> */}


        {/* <Counter></Counter> */}
        {/* <Greet  name="Clark"  heroName="Superman"></Greet> */}
        {/* <EventBind></EventBind> */}
        <ParentComponent></ParentComponent>
      </header>
    </div>
  );
}

export default App;
