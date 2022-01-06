import React, {useState, useEffect} from "react";

function Welcome({user}) {

    const [card, setCard] = useState([])
    const [threeCards, setThreeCards] = useState([])

    const fetchCards = () => { 
        console.log("fetched!");

        fetch("/card")
            .then(response => response.json())
            .then(result => setCard(result),
                console.log(card)
            )
            .catch(err => console.log(err))
      }
    
    useEffect(fetchCards, [])

    const getThreeCards = () => {
        let arr = [];
        while(arr.length < 3){
            let newCard = card[Math.floor(Math.random() * 80) + 1];
            if(arr.indexOf(newCard) === -1) arr.push(newCard);
        }
        console.log(threeCards);
        setThreeCards(arr)
    }

    function renderThreeCards() {
        return (
            <div className="card-layout-container">
            {threeCards.length === 3 &&
                <>
                    <div className="card-container">
                        <img className="card-picked" alt="tarot card" src={threeCards[0].image}></img>
                        <p className="meaning">{threeCards[0].meaning}</p>
                    </div>

                    <div className="card-container">
                    <img className="card-picked" alt="tarot card" src={threeCards[1].image}></img>
                    <p className="meaning">{threeCards[1].meaning}</p>
                    </div>

                    <div className="card-container">
                    <img className="card-picked" alt="tarot card" src={threeCards[2].image}></img>
                    <p className="meaning">{threeCards[2].meaning}</p>
                    </div>
                </>
            }
            </div>
       
        )
    }


    return (
        <div>
            <h4 className="welcome"> Welcome, {user.username}</h4>
            
            <h5>Choose a Reading:</h5>
            <button className="reading btn" onClick={() => getThreeCards()}>
                Past, Present, Future
            </button>
            

            {renderThreeCards()}

        </div>
    )
}

export default Welcome
