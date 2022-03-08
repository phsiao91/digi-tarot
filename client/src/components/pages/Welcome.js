import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function Welcome({user, setUser}) {

    // const [card, setCard] = useState([])
    // const [threeCards, setThreeCards] = useState([])
    const [question, setQuestion] = useState("")
    const [error, setError] = useState("")

    console.log(user)

    // function handleLogoutClick() {
    //     fetch("/logout", { method: "DELETE" }).then((r) => {
    //       if (r.ok) {
    //         setUser(null);
    //       }
    //     });
    //   }

    // added pull request

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
                        res.json().then((errorData) => setError(errorData.error));
                      }
                })
                .catch(error => {
                    // document.getElementById("error").innerHTML = error.message
                    throw new Error("please ask a question")
                    // console.error(error)
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
    const redirect = () => {
        window.location.href="http://localhost:4000/question"
    }

    return (
        <div className="subscribe-box">
            <h2 className="welcome"> Welcome, {user.username}</h2>
            <div>
                <form className="subscribe" onSubmit={handleSubmit} method="POST" >
                    {/* <label htmlFor="username">What would you like to know?</label> */}
                    <input
                        type="text"
                        id="question"
                        autoComplete="off"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="What would you like to know?"
                    />
                    <div id="error">{error}</div>
                    <button className="question-button" type="submit" onClick={redirect}>Ask a question</button>
                </form>
            </div>
        </div>

    )
}


export default Welcome
