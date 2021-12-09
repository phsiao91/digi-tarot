import React from 'react'

function Welcome({user}) {

    const selectCards = () => {
        console.log("magic fortune!");
    };

    return (
        <div>
            <h4 className="welcome"> Welcome, {user.username}</h4>

            <button onClick={() => selectCards()}>
                Get a Reading
            </button>
        </div>
    )
}

export default Welcome
