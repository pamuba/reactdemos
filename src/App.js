import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import Welcome from './components/Welcome';
import UseState from './components/UseState';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import Lists from './components/Lists';
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline';
import './components/appStyles.css'
import styles from './components/appStyles.module.css'
import Form from './components/Form'
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo'
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary'
import PostList from './components/PostList'
import PostForm from './components/PostForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1>
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
        {/* <ParentComponent></ParentComponent> */}
        {/* <Lists></Lists> */}

        {/* <Stylesheet primary={true}></Stylesheet> */}
        {/* CSS applis to every child component ass well */}
        {/* <Inline></Inline> */}
        {/* <Form></Form> */}

        {/* <ParentComp></ParentComp> */}

        {/* <RefsDemo></RefsDemo> */}
        {/* <ErrorBoundary>
          <Hero heroName="Superman"/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Batman"/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker"/>
        </ErrorBoundary> */}

        {/* <PostList></PostList> */}

        <PostForm></PostForm>
      </header>
    </div>
  );
}

export default App;
