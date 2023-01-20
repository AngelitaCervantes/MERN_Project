import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

export const AllSeasons = () => {
    let [seasons, setSeasons] = useState([])
    let [seasonsDeleted, setseasonsDeleted] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/seasons")
            .then(response => {
                // console.log("response: ", response)
                setSeasons(response.data.results);
            })
            .catch((err => console.log(err)))
    }, [seasonsDeleted])

    const deleteSeason = (id) => {
        axios.delete(`http://localhost:8000/api/seasons/${id}`)
            .then(response => {
                setseasonsDeleted(!seasonsDeleted)
            })
            .catch((err => console.log(err)))
    }

    return (
        <div>
            <h1>AllSeasons</h1>


            
        </div >

    )
}
