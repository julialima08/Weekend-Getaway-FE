import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import MainNav from "../components/MainNav"
import CreateTripForm from '../components/CreateTripForm'
import { BASE_URL } from "../globals"
import TripCard from "../components/TripCard"
import '../CSS/Trips.css'

const Trip = ({setUser, authorized, userId, trips, getUserTrips, viewTripDetails, tripDeleted}) => {

  let navigate = useNavigate()

  useEffect(()=> {
    if (tripDeleted) {
      getUserTrips()
    }
  }, [])

  let initialState = {
    userId: userId,
    title: '',
    date: '',
    destination: '',
  }

  const [newTrip, setNewTrip] = useState(initialState)

  const createTrip = async (e) => {
    e.preventDefault()
    let response = await axios.post(
      `${BASE_URL}/trips/create`,
      newTrip
    )
    setNewTrip(response.data)
  }

  const handleChange = (e) => {
    setNewTrip({ ...newTrip, [e.target.name]: e.target.value })
  }


return (
  <div>
    {authorized ? (
        <div>
          <MainNav setUser={setUser}/>
          <div>
          <h1>Trips</h1>
          <CreateTripForm getUserTrips={getUserTrips} createTrip={createTrip} newTrip={newTrip} handleChange={handleChange} setNewTrip={setNewTrip} initialState={initialState}/>
          <div >
            {trips != null ? (
              <div className="trip-map">
              {trips.map((trip) => (
              <div  key={trip.id}>
              <TripCard title={trip.title} destination={trip.destination} date={trip.date} onClick={()=> viewTripDetails(trip.id)}/>
              </div>
            ))}
            </div>
            ) : (null) }
          </div>
          <button onClick={()=>navigate('/home')}>back</button>
          </div>
        </div>
      ) : (
        <div>
          <h1>Your not authorized!</h1>
          <h2>Please login or create an account first</h2>
          <button onClick={()=> navigate('/')}>Back</button>
        </div>
      )}
  </div>
)
}

export default Trip