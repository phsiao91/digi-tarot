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
              credentials: "include",
              body: JSON.stringify(username, password)
        })
        .then(res => {
            if (res.ok) {
                return res.json().then((user) => setUser(user))
                .then(setUsername(""), setPassword(""))
            } else {
                return res.json().then(errors => Promise.reject(errors))
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
                    <Link to="/">
                    <input type="submit" onClick={handleLogin} value="Login"></input>
                    </Link>
                </div>
            </div>
      
    </div>
    )
}

export default Login;