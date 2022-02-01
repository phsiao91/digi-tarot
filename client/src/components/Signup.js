import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    }).catch(err => console.log(err));
  }

  const redirect = () => {
    window.location.href="http://localhost:4000/welcome"
  }

  const history = useHistory()

    const login = () => {
      let path = "/login"
      history.push(path)
    }



  return (
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <h1>Sign Up</h1>
    //     <label htmlFor="username">Username</label>
    //     <input
    //       type="text"
    //       id="username"
    //       autoComplete="off"
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //     /><br></br>
    //     <label htmlFor="password">Password</label>
    //     <input
    //       type="password"
    //       id="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       autoComplete="current-password"
    //     /><br></br>
    //     <label htmlFor="password">Password Confirmation</label>
    //     <input
    //       type="password"
    //       id="password_confirmation"
    //       value={passwordConfirmation}
    //       onChange={(e) => setPasswordConfirmation(e.target.value)}
    //       autoComplete="current-password"
    //     />
    //     <br></br>
    //     <button type="submit">Sign Up</button>
    //   </form>

    //   <Link to='login'>Already have an account? Login</Link>
    // </div>
    <div class="container">
         <div class="screen">
           <div class="screen__content">
             <form class="login" onSubmit={redirect} method="POST">
               <div class="login__field">
                 <i class="login__icon fas fa-user"></i>
                 <input type="text" class="login__input" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username / Email"/>
               </div>
               <div class="login__field">
                 <i class="login__icon fas fa-lock"></i>
                 <input type="password" class="login__input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
               </div>
               <div class="login__field">
                 <i class="login__icon fas fa-lock"></i>
                 <input type="password" class="login__input" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Confirm Password"/>
               </div>
               <button class="button login__submit" onClick={handleSubmit}>
                 <span class="button__text">Create Account</span>
                 <i class="button__icon fas fa-chevron-right"></i>
               </button>				
             </form>
             <div class="social-login" onClick={login}>
               <h4>Already have an account?</h4>
               <h4>Login here</h4>
             </div>
           </div>
           <div class="screen__background">
             <span class="screen__background__shape screen__background__shape4"></span>
             <span class="screen__background__shape screen__background__shape3"></span>		
             <span class="screen__background__shape screen__background__shape2"></span>
             <span class="screen__background__shape screen__background__shape1"></span>
           </div>		
         </div>
       </div>
  );
}

export default SignUp;