import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/login">
            <h1>Page Count: {count}</h1>
            <Login />
          </Route>

          <Route path="/"></Route>

      </div>
    </BrowserRouter>
  );
}

export default App;
