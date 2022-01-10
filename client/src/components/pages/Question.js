import React, {useState} from "react";


function Question() {

    const [question, setQuestion] = useState("")


    const handleSubmit = () => {

    }


    return (
        <>
            <div>
                <div className="row-1">
                    <div className="col-1">
                        <div className="form-group-1">
                            <label htmlFor="question">Question for today</label>
                            <input 
                                type="text"
                                name="summary"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}/>
                        </div>
                    </div>
                    <input className="odd" type="submit" onClick={handleSubmit} value="Submit"></input>
                </div>
            </div>
        </>
    )
}

export default Question