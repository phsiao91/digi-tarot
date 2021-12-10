import React, {useState, useEffect} from "react";


function Welcome({user}) {

    const fetchCards = () => { 
        console.log("magic fortune!");

        fetch("/card")
        .then(response => response.json())
        .then(result => { console.log(result)
          this.setState({ 
            card: result.cards
            });
            console.log(result.cards[2])
          })
        .catch(err => console.log(err))
      }


    const selectCards = () => {
        

    };

    return (
        <div>
            <h4 className="welcome"> Welcome, {user.username}</h4>

            <button onClick={() => fetchCards()}>
                Get a Reading
            </button>
        </div>
    )
}

export default Welcome
