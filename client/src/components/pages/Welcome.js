import React from 'react'

function Welcome({user}) {

    state = {
        cards: []
    }

    fetchCards = () => { 
        fetch(BASE_URL)

        .then(response => response.json())

        .then(result => {
          this.setState({ 
            pics: result.cards
            });
          })

        .catch(err => console.log(err))
      }

    // componentDidMount() {
    //     this.fetchCards()
    // }

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
