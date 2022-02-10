import React, {useState, useEffect} from "react";

function UserReadings() {

    const [reading, setReading] = useState([])

    const fetchReadings = () => {
        // e.preventDefault()
        fetch("/readingsall")
            .then(response => response.json())
            .then(result => setReading(result),
                // console.log(card)
            )
            .catch(err => console.log(err))
    }

    useEffect(fetchReadings, [])

    const mapReadings = () => {
        let mappedReadings = reading.map(eachReading =>{
            return(
                <div>{eachReading.question}</div>
            )
        })
        return mappedReadings
    }



    return(
        <div>
            <div>{mapReadings()}</div>
        </div>
    )
}


export default UserReadings;