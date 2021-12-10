import React, {useState, useEffect} from "react";



function Welcome({user}) {

    const [card, setCard] = useState([])
    // state = {
    //     cards: []
    // }

    const fetchCards = () => { 
        console.log("magic fortune!");

        fetch("/card")

        .then(response => response.json())

        .then(result => setCard(result)
          )

        .catch(err => console.log(err))
      }
      useEffect(fetchCards, [])
    // componentDidMount() {
    //     this.fetchCards()
    // }

    // const getQuote = () => {
    //     fetch("https://type.fit/api/quotes")
    //     .then(res => res.json())
    //     .then(fetchedQuote => {console.log(fetchedQuote)
    //         let randomQuote = fetchedQuote[Math.floor(Math.random() * fetchedQuote.length)]

    //     setQuote(randomQuote)

    // })
    // }
    // useEffect(getQuote, [])

    // fetchCards()

    console.log(card)

    const selectCards = () => {
        console.log("magic fortune!");

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
