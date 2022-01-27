import React from 'react'
import { Link } from "react-router-dom"

function NavBar({setUser}) {


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
            <Link to="/" onClick={handleLogoutClick}>Logout</Link>
        </div>
        </>
    )
}

export default NavBar
