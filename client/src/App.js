import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Home from "./components/Home";

function App() {

  const [user, setUser] = useState(null)

  return (
    <div className="App">
    
      <main>
        {user? (
          <Switch>
            <Route path="/">
              <Home user={user}/>
            </Route>
          </Switch>
            ) : (
          <Switch>
            <Route path="/login">
              <Login setUser={setUser}/>
            </Route>
            <Route path="/signup">
              <SignUp setUser={setUser}/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
            )}
      </main>
    </div>
  );
}

export default App;