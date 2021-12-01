import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
<<<<<<< HEAD
=======
import Home from "./components/Home";
>>>>>>> a521b58ed9af76a5b6aa46ea0ae7f375a21a341f

function App() {

  const [user, setUser] = useState(null)

  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> a521b58ed9af76a5b6aa46ea0ae7f375a21a341f
  );
}

export default App;