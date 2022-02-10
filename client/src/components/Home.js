import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Welcome from "./pages/Welcome";

function Home({ user, setUser }) {


  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordConfirmation, setPasswordConfirmation] = useState("");

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   fetch("/signup", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username,
  //       password,
  //       password_confirmation: passwordConfirmation,
  //     }),
  //   }).then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   })
  // }
    const history = useHistory()

    const login = () => {
      let path = "/login"
      history.push(path)
    }

    const signup = () => {
      let path = "/signup"
      history.push(path)
    }


    // console.log(user)

    // const redirect = () => {
    //   window.location.href="http://localhost:4000/welcome"
    // }

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