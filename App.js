import './App.css';
import Greet  from './components/greet.js'
import Welcome from './components/Welcome.js'
import Hello from './components/hello.js'
import Msg from './components/Msg.js'
import Counter from './components/Counter.js';
import FunctionClick from './components/FunctionClick.js';
import Classclick from './components/classclick.js';
import EventBind from './components/EventBind.js';



function App() {
  return (
    <div className="App">
      <Greet name="qw" hname="as" />
      <Greet name="er" hname="df" />
      <Greet name="op" hname="uy">
        <p>how are you</p>
      </Greet>
      <Greet name="ty" hname="gh" />
      <Greet name="op" hname="uy">
        <button>uy</button>
      </Greet>

      <Welcome name="qw" hname="as" />
      <Welcome name="er" hname="df" />
      <Welcome name="op" hname="uy" />

      {/* <Hello /> */}

      <Msg />
      <br />
        <br />        <br />
        <br />
      <Counter />
      <br />
        <br />        <br />
        <br />
        <FunctionClick />
        <br />        <br />
        <br />
        <Classclick />
        <br />       
        <EventBind />
         <br />
        <br />
    </div>
  );
}

export default App;