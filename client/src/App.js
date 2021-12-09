import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Welcome from "./components/pages/Welcome";

function App() {

  const [user, setUser] = useState(null)

  return (
    <div className="App">
    <NavBar/>
      <main>
        <Router>
          {user? (
            <Switch>
              <Route path="/welcome">
                <Welcome user={user}/>
              </Route>
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
        </Router>
      </main>
    </div>
  );
}

export default App;