import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function Welcome({user, setUser}) {

    // const [card, setCard] = useState([])
    // const [threeCards, setThreeCards] = useState([])
    const [question, setQuestion] = useState("")
    const [error, setError] = useState("")

    // console.log(user)

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
                    throw new Error("please ask a question")
                    // console.error(error)
                })
    }



    

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
