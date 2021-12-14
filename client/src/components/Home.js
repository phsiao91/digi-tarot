<<<<<<< HEAD
// import React, {useState, useEffect} from "react";
=======
import React from "react";
>>>>>>> McKay
import { useHistory } from "react-router-dom";
import Welcome from "./pages/Welcome";

function Home({ user }) {

    const history = useHistory()

    const login = () => {
      let path = "/login"
      history.push(path)
    }

    const signup = () => {
      let path = "/signup"
      history.push(path)
    }

    if (user) {
      return (
        <div>
          <Welcome user={user}/>
        </div>)
    } else {
      return (
        <div>
            <div className="prompt">
                <h3 className="prompt_2" onClick={login}>Login </h3>
                <h3 className="prompt_3">or </h3>
                <h3 className="prompt_4" onClick={signup}>SignUp</h3>
            </div>
        </div>
      )
    }
  }
  
  export default Home;