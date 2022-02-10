import React from 'react'
import { Link } from "react-router-dom"
import {  Switch } from "react-router-dom";
// import { useState, useEffect } from "react";

function NavBar({user, setUser}) {

  // const [user, setUser] = useState(null)




    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

    // console.log(setUser)

    return (
      <>
        <div>
          <h1 className="logo">DigiTarot</h1>
            {user? (
              // <Switch>
              <div>
                
                <button onClick={handleLogoutClick}>Logout</button>
              </div>
              // </Switch>
              ) : (
              // <Switch>
                <div>

                </div>
              // </Switch>
              )}
        </div>
      </>
    )
}

export default NavBar
