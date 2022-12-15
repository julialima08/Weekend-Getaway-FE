
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MainNav from '../components/MainNav'
import { deleteTrip } from '../services/Auth'
import UpdateTripForm from '../components/UpdateTripForm'
import FlightCard from '../components/FlightCard'
import axios from 'axios'
import { BASE_URL } from '../globals'
import '../CSS/TripDetails.css'
import '../CSS/Trips.css'

const TripDetails = ({
  authorized,
  setUser,
  selectedTrip,
  setTripDeleted,
  setTripUpdated,
  tripUpdated,
  viewTripDetails,
  setTripId,
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
    console.log(tripUpdated)
  }

  const removeFlight = async (id) => {
    await axios.delete(`${BASE_URL}/flights/delete/${id}`)
    setTripUpdated(true)
  }

  const addFlight = (id) => {
    setTripId(id)
    navigate(`/search`)
  }

  useEffect(() => {
  if (tripUpdated) {
    viewTripDetails(selectedTrip.id)
  }
  }, [tripUpdated])


  return (
    <div>
      {authorized ? (
        <div className='trip-det-page'>
          <MainNav setUser={setUser} />
          <div className='trip-details'>
            <h1 className='detail-title'>Trip details</h1>
            {selectedTrip ? (
              <div>
                <button onClick={() => deleteClick(selectedTrip.id)}>
                  Delete Trip
                </button>
                <button onClick={() => updatedTrip(selectedTrip.id)}>
                  Edit Trip
                </button>
                <button onClick={() => addFlight(selectedTrip.id)}>
                  Add flights
                </button>
                {buttonClicked ? (
                  <div>
                    <UpdateTripForm
                      setButtonClicked={setButtonClicked}
                      buttonClicked={buttonClicked}
                      setTripUpdated={setTripUpdated}
                      selectedTrip={selectedTrip}
                      setTripId={setTripId}
                      // tripId={tripId}
                      tripUpdated={tripUpdated}
                    />
                  </div>
                ) : (
                  <div>
                    <div className='info'>
                    <div>{selectedTrip.title}</div>
                    <div>{selectedTrip.destination}</div>
                    <div>{selectedTrip.date}</div>
                    </div>
                    <div>
                      {selectedTrip.flights.map((flight, index)=> (
                        <div>
                      <FlightCard
                      airline={flight.airline}
                      price={flight.price}
                      departureAirport={flight.departureAirport}
                      arrivalAirport={flight.arrivalAirport}
                      departure={flight.departure}
                      arrival={flight.arrival}
                      departure2={flight.departure2}
                      arrival2={flight.arrival2}
                      departureAirport2={flight.departureAirport2}
                      arrivalAirport2={flight.arrivalAirport2}
                      />
                      <button onClick={()=>removeFlight(flight.id, index)}>Remove Flight</button>
                      </div>
                    ))}
                    </div>
                  </div>
                )}
              </div>
            ) : null}
            <div className='bk-bnt'>
            <button onClick={() => navigate('/trips')}>back</button>
            </div>
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
