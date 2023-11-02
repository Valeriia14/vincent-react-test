import logo from './logo.svg';
import './App.css';
import React ,{useState , useEffect} from "react"

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, [count]);

  return <h1>I've rendered {count} times!</h1>;
}

function App() {
  return (
    <div className="App">
      <Timer />
    </div>
  );
}

export default App;
