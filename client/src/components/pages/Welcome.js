import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function Welcome({user, setUser}) {

    const [card, setCard] = useState([])
    const [threeCards, setThreeCards] = useState([])
    const [question, setQuestion] = useState("")

    // console.log(setUser)

    // function handleLogoutClick() {
    //     fetch("/logout", { method: "DELETE" }).then((r) => {
    //       if (r.ok) {
    //         setUser(null);
    //       }
    //     });
    //   }

    const handleSubmit = (e) => {
        e.preventDefault()
            fetch("/question", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    question
                }),
            }).then(res => {
                if (res.ok) {
                    return res.json()
                    .then(setQuestion(""))
                    }else {
                    return res.json().then(errors => Promise.reject(errors))
                    }
                })
    }


    // const fetchCards = () => { 
    //     // console.log("fetched!");

    //     fetch("/card")
    //         .then(response => response.json())
    //         .then(result => setCard(result),
    //             console.log(card)
    //         )
    //         .catch(err => console.log(err))
    //   }
    
    // useEffect(fetchCards, [])

    // const getThreeCards = () => {
    //     let arr = [];
    //     while(arr.length < 3){
    //         let newCard = card[Math.floor(Math.random() * 77) + 1];
    //         if(arr.indexOf(newCard) === -1) arr.push(newCard);
    //     }

    //     console.log(threeCards);

    //     setThreeCards(arr)
    // }

    // function renderThreeCards() {
    //     return (
    //         <div className="card-layout-container">
    //         {threeCards.length === 3 &&
    //             <>
    //                 <div className="card-container">
    //                     <div>{threeCards[0].name}</div>
    //                     <img className="card-picked" alt="tarot card" src={threeCards[0].image}></img>
    //                     <p className="meaning">{threeCards[0].meaning}</p>
    //                 </div>

    //                 <div className="card-container">
    //                     <div>{threeCards[1].name}</div>
    //                     <img className="card-picked" alt="tarot card" src={threeCards[1].image}></img>
    //                     <p className="meaning">{threeCards[1].meaning}</p>
    //                 </div>

    //                 <div className="card-container">
    //                     <div>{threeCards[2].name}</div>
    //                     <img className="card-picked" alt="tarot card" src={threeCards[2].image}></img>
    //                     <p className="meaning">{threeCards[2].meaning}</p>
    //                 </div>
    //             </>
    //         }
    //         </div>
       
    //     )
    // }

    

    //   console.log(user)

    return (
        <div>
            <h4 className="welcome"> Welcome, {user.username}</h4>
            <div>
                <div className="row-1">
                    <div className="col-1">
                        <div className="form-group-1">
                            <label htmlFor="question">What would you like to know?</label>
                            <input 
                                type="text"
                                name="summary"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                />
                        </div>
                    </div>
                    <Link to="/question">
                    <input type="submit" className="button" onClick={handleSubmit} value="Ask a question"></input>
                    </Link>
                </div>
            </div>
            {/* <h2>{question}</h2>
            <button onClick={ getThreeCards}>
                Get a Reading
            </button>
            {renderThreeCards()}

            <button>
                Save Reading
            </button> */}
        </div>
    )
}


export default Welcome
