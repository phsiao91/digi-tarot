import React from "react";
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
        // <div>
        //     <div className="prompt">
        //         <h3 className="prompt_2" onClick={login}>Login </h3>
        //         <h3 className="prompt_3">or </h3>
        //         <h3 className="prompt_4" onClick={signup}>SignUp</h3>
        //     </div>
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
              <div class="login__field">
                <i class="login__icon fas fa-lock"></i>
                <input type="password" class="login__input" placeholder="Confirm Password"/>
              </div>
              <button class="button login__submit">
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
      )
    }
  }
  
  export default Home;