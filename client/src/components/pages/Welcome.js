import React from 'react'

function Welcome({user}) {
    return (
        <div>
            <h4 className="welcome"> Welcome, {user.username}</h4>
        </div>
    )
}

export default Welcome
