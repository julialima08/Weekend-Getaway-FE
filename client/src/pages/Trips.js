import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import MainNav from "../components/MainNav"
import CreateTripForm from '../components/CreateTripForm'
import { BASE_URL } from "../globals"

const Trip = ({setUser, authorized, userId}) => {

  let navigate = useNavigate()

  const getUserTrips = async () => {
    let res = await axios.get(`${BASE_URL}/user/${userId}`)
    console.log(res.data.Trips)
  }

  useEffect(()=> {
    getUserTrips()
  },[])

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
    console.log(response.data)
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
          <CreateTripForm createTrip={createTrip} newTrip={newTrip} handleChange={handleChange} setNewTrip={setNewTrip} initialState={initialState}/>
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