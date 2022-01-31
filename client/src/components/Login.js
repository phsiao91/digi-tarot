import React, {useState} from "react";
import { Link } from "react-router-dom"


function Login( {setUser} ) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const handleLogin = (e) => {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            //   credentials: "include",
              body: JSON.stringify({username, password})
        })
        .then((r) => {
            if (r.ok) {
              r.json().then((user) => setUser(user));
            }
        })
    }


    return (
    //     <div>
    //   <div className="card">
    //             <h2>Login</h2>
    //             <div className="row">
    //                 <div className="col">
    //                     <div className="form-group">
    //                         <label htmlFor="username">username</label>
    //                         <input 
    //                             type="text"
    //                             name="username"
    //                             value={username}
    //                             onChange={(e) => setUsername(e.target.value)}/>
    //                     </div>
    //                 </div>
    //                 <div className="col">
    //                     <div className="form-group">
    //                         <label htmlFor="password">password</label>
    //                         <input 
    //                             type="password"
    //                             name="password"
    //                             value={password}
    //                             onChange={(e) => setPassword(e.target.value)}/>
    //                     </div>
    //                 </div>
    //                 <Link to="welcome">
    //                 <input type="submit" className="button" onClick={handleLogin} value="Login"></input>
    //                 </Link>
    //             </div>
    //             <Link to='signup'>Don't have an account? Sign Up!!</Link>
    //         </div>
      
    // </div>
    <div class="container">
        <div class="screen">
          <div class="screen__content">
            <form class="login">
              <div class="login__field">
                <i class="login__icon fas fa-user"></i>
                <input type="text" class="login__input" placeholder="Username / Email"/>
              </div>
              <div class="login__field">
                <i class="login__icon fas fa-lock"></i>
                <input type="password" class="login__input" placeholder="Password"/>
              </div>
              <button class="button login__submit">
                <span class="button__text">Login</span>
                <i class="button__icon fas fa-chevron-right"></i>
              </button>				
            </form>
            <div class="social-login">
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
    )
}

export default Login;