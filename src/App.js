import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Container/HomePage";
import Cart from "./Container/Cart";
import React, { useCallback, useState } from "react";

export const CounterContext = React.createContext();

function App() {
  const [count, setCount] = useState(0);
  const updateCounter = useCallback(() => setCount(count + 1));
  const contextValue = { count, updateCounter };

  return (
    <div className="App">
      <CounterContext.Provider value={contextValue}>
        <Cart></Cart>
        <HomePage></HomePage>
      </CounterContext.Provider>
      {/* <header className="App-header">we might have cart here</header> */}
    </div>
  );
}

export default App;
