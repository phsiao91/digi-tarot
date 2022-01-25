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
        <div>
      <div className="card">
                <h2>Login</h2>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="username">username</label>
                            <input 
                                type="text"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="password">password</label>
                            <input 
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <Link to="/question">
                    <input type="submit" className="button" onClick={handleLogin} value="Login"></input>
                    </Link>
                </div>
                <Link to='signup'>Don't have an account? Sign Up!!</Link>
            </div>
      
    </div>
    )
}

export default Login;