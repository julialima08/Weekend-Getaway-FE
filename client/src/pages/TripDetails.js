import axios from "axios"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import MainNav from "../components/MainNav" 
import { BASE_URL } from "../globals"
import { deleteTrip } from "../services/Auth"

const TripDetails = ({authorized, setUser, selectedTrip, getUserTrips} ) => {
  let navigate = useNavigate()
  
  const deleteClick = async (id) => {
    deleteTrip(id)
    navigate('/trips')
    getUserTrips()
  }

  return (
    <div>
      {authorized ? (
        <div>
          <MainNav setUser={setUser}/>
          <div>
          <h1>Trip details</h1>
          {selectedTrip ? (
            <div>
              <button onClick={()=>deleteClick(selectedTrip.id)}>Delete Trip</button>
            <h2>{selectedTrip.title}</h2>
            <h2>{selectedTrip.destination}</h2>
            <h2>{selectedTrip.date}</h2>
            </div>
          ): null}
          <button onClick={()=>navigate('/trips')}>back</button>
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

export default TripDetails