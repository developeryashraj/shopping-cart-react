import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Container/HomePage";
import Cart from "./Container/Cart";
import React, { useState } from "react";

export const CounterContext = React.createContext();

function App() {
  const [count, setCount] = useState(0);
  const updateCounter = () => setCount(count + 1);

  return (
    <div className="App">
      <CounterContext.Provider value={count}>
        <Cart></Cart>
        <HomePage updateCounter={updateCounter}></HomePage>
      </CounterContext.Provider>
      {/* <header className="App-header">we might have cart here</header> */}
    </div>
  );
}

export default App;
