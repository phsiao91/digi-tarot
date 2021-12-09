import React, {useState, useEffect} from "react";


function Welcome({user}) {

    // state = {
    //     cards: []
    // }

    const fetchCards = () => { 
        fetch("/card")

        .then(response => response.json())

        .then(result => { console.log(result)
          this.setState({ 
            card: result.cards
            });
          })

        .catch(err => console.log(err))
      }

    // componentDidMount() {
    //     this.fetchCards()
    // }
    fetchCards()

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
