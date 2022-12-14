import React, { useEffect, useState } from 'react'
import '../CSS/App.css'
import '../CSS/popup.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import TripCard from './TripCard'
import { BASE_URL } from "../globals"

const AddFlightToTrip = (props) => {
  const [popUp, setPopUp] = useState(false)
  // const [trips, setTrips] = useState([])
  const [flight, setFlight] = useState({})
  // let userId = localStorage.getItem('id')

  // const getTrips = async () => {
  //   let res = await axios.get(`${BASE_URL}/user/${userId}`)
  //   setTrip(res.data.trips)
  // }

  // useEffect(()=> {
  //   getTrips()
  // })

  const togglePopUp = async () => {
    setPopUp(!popUp)
  }

  const addFlightToTrip = async (trip) => {
    let response = await axios.post(
      `${BASE_URL}/flights/create`,
      flight
      )
      console.log(response)
  }
  const [tripId, setTripId] = useState(null)
  let navigate = useNavigate()
  
  const handleSubmit = async (trip) => {
    await addFlightToTrip(trip)
    navigate(`/trips`)
  }
  
  const handleClick = () => {
    setFlight(props.flight)
    togglePopUp()
    // console.log(props.flight)
  }

  if (popUp) {
    document.body.classList.add('active-popUp')
  } else {
    document.body.classList.remove('active-popUp')
  }

  return (
    <>
      <button onClick={handleClick} className="btn-popUp">
        Add to trip
      </button>

      {popUp && (
        <div className="popUp">
          <div onClick={togglePopUp} className="overlay"></div>
          <div className="popUp-content">
            <button className="close-popUp" onClick={togglePopUp}>
              CLOSE
            </button>
            {flight ? (
            <div className="trip-map">
              {props.trips.map((trip) => (
              <div  key={trip.id}>
              <TripCard title={trip.title} destination={trip.destination} date={trip.date} />
              <div>
                  <button
                    className="add"
                    onClick={() => handleSubmit(trip)}
                  >
                    add to trip
                  </button>
                </div>
              </div>
            ))}
            </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  )
}

export default AddFlightToTrip
