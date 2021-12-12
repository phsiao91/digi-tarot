import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";



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
        let threeCards = [];
        while(threeCards.length < 3){
            let newCard = card[Math.floor(Math.random() * 34) + 1];
            if(threeCards.indexOf(newCard) === -1) threeCards.push(newCard);
        }
        // console.log(threeCards);
        setThreeCards(threeCards)
    }

    console.log(threeCards);

    return (
        <div>
            <h4 className="welcome"> Welcome, {user.username}</h4>

            <button onClick={() => getThreeCards()}>
                Get a Reading
            </button>

            <div className="card-layout-container">
                <img classname="card-picked" src={threeCards[0].image}></img>
                <img classname="card-picked" src={threeCards[1].image}></img>
                <img classname="card-picked" src={threeCards[2].image}></img>
            </div>

        </div>

       
    )
}

export default Welcome
