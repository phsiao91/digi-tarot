import React, {useState, useEffect} from "react";
// import { Link } from "react-router-dom";

function Question({user}) {

    const [question, setQuestion] = useState('')

    const [card, setCard] = useState([])
    const [threeCards, setThreeCards] = useState([])
    // const [card1, setCard1] = useState()
    // const [card2, setCard2] = useState()
    // const [card3, setCard3] = useState()

    // console.log(threeCards[0].id)


    let idArray = []

    const getId = (arr) => {
        for(let i = 0; i < arr.length; i++){
            idArray.push(arr[i].id)
        }
        return arr
    }

    getId(threeCards)

    let card1 = idArray[0]
    let card2 = idArray[1]
    let card3 = idArray[2]

    console.log(card1)
    console.log(card2)
    console.log(card3)

    const saveReading = (e) => {
        e.preventDefault()
        fetch("/save", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                card1,
                card2,
                card3
            }),
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else{
                return res.json().then(errors => Promise.reject(errors))
            }
        })
    }

    



    const fetchCards = () => { 
        // console.log("fetched!");

        fetch("/card")
            .then(response => response.json())
            .then(result => setCard(result),
                // console.log(card)
            )
            .catch(err => console.log(err))
      }
    
    useEffect(fetchCards, [])

    const fetchQuestion = () => { 
        // console.log("fetched!");
        fetch("/reading")
            .then(response => response.json())
            .then(result => setQuestion(result.question),
                // console.log(question)
            )
            .catch(err => console.log(err))
      }

      useEffect(fetchQuestion, [])

    //   console.log(question)


    const getThreeCards = () => {
        let arr = [];
        while(arr.length < 3){
            let newCard = card[Math.floor(Math.random() * 77) + 1];
            if(arr.indexOf(newCard) === -1) arr.push(newCard);
        }

        

        setThreeCards(arr)
    }

    function renderThreeCards() {
        return (
            <div className="card-layout-container">
            {threeCards.length === 3 &&
                <>
                    <div className="card-container">
                        <div>{threeCards[0].name}</div>
                        <img className="card-picked" alt="tarot card" src={threeCards[0].image}></img>
                        <p className="meaning">{threeCards[0].meaning}</p>
                    </div>

                    <div className="card-container">
                        <div>{threeCards[1].name}</div>
                        <img className="card-picked" alt="tarot card" src={threeCards[1].image}></img>
                        <p className="meaning">{threeCards[1].meaning}</p>
                    </div>

                    <div className="card-container">
                        <div>{threeCards[2].name}</div>
                        <img className="card-picked" alt="tarot card" src={threeCards[2].image}></img>
                        <p className="meaning">{threeCards[2].meaning}</p>
                    </div>
                </>
            }
            </div>
       
        )
    }


    console.log(threeCards);

    console.log(idArray)

    //   console.log(user)

    return (
        <div>
            <h4 className="welcome"> Welcome, {user.username}</h4>
            <div>{question}?</div>
            <button onClick={ getThreeCards}>
                Get a Reading
            </button>
            {renderThreeCards()}
            <button onClick={saveReading}>
                Save Reading
            </button>
        </div>
    )
}

export default Question