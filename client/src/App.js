import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Home from "./components/Home";
<<<<<<< HEAD
=======
import NavBar from "./components/NavBar";
>>>>>>> 6754ed8765be323e17c3855c04831c9a15110400

function App() {

  const [user, setUser] = useState(null)

  return (
    <div className="App">
    <NavBar/>
      <main>
        <Router>
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
        </Router>
      </main>
    </div>
  );
}

export default App;