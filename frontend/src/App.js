import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';

function App() {

  useEffect(() => {
    fetch("http://localhost:4000")
      .then(res=>{
        return res.json()
      })
      .then(data=>console.log(data.message))
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        Welcome! Check the Console to see a message from the server.
      </header>
    </div>
  );
}

export default App;
