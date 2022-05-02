import './App.css';
import GoogleMap from './api/GoogleMap'

function App() {
  return (
    <div className="App">
      <h1>Charge&Go</h1>
      <body>
        <div id= "map">
          <GoogleMap />
        </div>        
      </body>
      
    </div>
  );
}

export default App;
