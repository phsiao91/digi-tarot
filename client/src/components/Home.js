import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";

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
      return (<div className="first">
                  <h4 className="welcome"> Welcome, {user.username}</h4>
                
                <div>
                  <p className="start" >Let's get started!</p>
                  
                </div>
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