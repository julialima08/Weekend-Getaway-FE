// import axios from "axios"
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MainNav from '../components/MainNav'
// import { BASE_URL } from "../globals"
import { deleteTrip } from '../services/Auth'
import UpdateTripForm from '../components/UpdateTripForm'
import FlightCard from '../components/FlightCard'
import axios from 'axios'
import { BASE_URL } from '../globals'

const TripDetails = ({
  authorized,
  setUser,
  selectedTrip,
  setTripDeleted,
  setTripUpdated,
  tripUpdated,
  viewTripDetails
}) => {
  let navigate = useNavigate()
  const [buttonClicked, setButtonClicked] = useState(false)

  const deleteClick = async (id) => {
    await deleteTrip(id)
    setTripDeleted(true)
    navigate('/trips')
  }

  const updatedTrip = () => {
    setButtonClicked(!buttonClicked)
  }

  const removeFlight = async (id) => {
    await axios.delete(`${BASE_URL}/flights/delete/${id}`)
  }

  let { tripId } = useParams()
  useEffect(() => {
    if (tripUpdated) {
      viewTripDetails(tripId)
    }
  })


  return (
    <div>
      {authorized ? (
        <div>
          <MainNav setUser={setUser} />
          <div>
            <h1>Trip details</h1>
            {selectedTrip ? (
              <div>
                <button onClick={() => deleteClick(selectedTrip.id)}>
                  Delete Trip
                </button>
                <button onClick={() => updatedTrip(selectedTrip.id)}>
                  Edit Trip
                </button>
                {buttonClicked ? (
                  <div>
                    <UpdateTripForm
                      setButtonClicked={setButtonClicked}
                      buttonClicked={buttonClicked}
                      setTripUpdated={setTripUpdated}
                      selectedTrip={selectedTrip}
                    />
                  </div>
                ) : (
                  <div>
                    <h2>{selectedTrip.title}</h2>
                    <h2>{selectedTrip.destination}</h2>
                    <h2>{selectedTrip.date}</h2>
                    <div>
                      {selectedTrip.flights.map((flight, index)=> (
                      <FlightCard
                      airline={flight.airline}
                      price={flight.price}
                      departure={flight.departureAirport}
                      arrival={flight.arrivalAirport}
                      departureDate={flight.departure}
                      onClick={()=>removeFlight(flight.id, index)}
                      />
                    ))}
                    </div>
                  </div>
                )}
              </div>
            ) : null}
            <button onClick={() => navigate('/trips')}>back</button>
          </div>
        </div>
      ) : (
        <div>
          <h1>Your not authorized!</h1>
          <h2>Please login or create an account first</h2>
          <button onClick={() => navigate('/')}>Back</button>
        </div>
      )}
    </div>
  )
}

export default TripDetails
