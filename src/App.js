import './App.css'
import HelloClass from './components/HelloClass.js'

function App() {
  return (
    <div className="App">
      <HelloClass greetTo='World' />
      {/* <Hello1 greetTo='Africa' />
      <Hello1 greetTo='America' greetAlsoTo='Australia' /> */}
    </div>
  );
}

export default App;
