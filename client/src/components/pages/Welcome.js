import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function Welcome({user, setUser}) {

    const [card, setCard] = useState([])
    const [threeCards, setThreeCards] = useState([])

    console.log(setUser)

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

    const fetchCards = () => { 
        // console.log("fetched!");

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
            let newCard = card[Math.floor(Math.random() * 34) + 1];
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

    

      console.log(user)

    return (
        <div>
            <h4 className="welcome"> Welcome, {user.username}</h4>
            <button onClick={ getThreeCards}>
                Get a Reading
            </button>
            {renderThreeCards()}
            {/* <Link to="/" onClick={handleLogoutClick}>Logout</Link> */}
        </div>
    )
}


export default Welcome
