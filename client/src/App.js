import Login from './pages/Login';
import Home from './pages/Home'
import Trip from './pages/Trips';
import Search from './pages/Search';
import TripDetails from './pages/TripDetails';
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { CheckSession } from './services/Auth'
import { useState, useEffect } from 'react'
import { BASE_URL } from "./globals"
import axios from "axios"
import './CSS/App.css';

function App() {
  const [user, setUser] = useState(null)
  const [authorized, setAuthorized] = useState(true)
  let navigate = useNavigate()

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }
  const [trips, setTrips] = useState(null)

  const getUserTrips = async () => {
    let res = await axios.get(`${BASE_URL}/user/${userId}`)
    setTrips(res.data.Trips)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    getUserTrips()
    if (token) {
      checkToken()
    } else {
      setAuthorized(false)
    }
  }, [])

  let userId = localStorage.getItem('id')

  const [selectedTrip, setSelectedTrip] = useState(null)
  const [tripDeleted, setTripDeleted] = useState(false)
  const [tripUpdated, setTripUpdated] = useState(false)

  const viewTripDetails = async (id) => {
    navigate(`/trip/${id}`)
      const res = await axios.get(`${BASE_URL}/trips/${id}`)
      setSelectedTrip(res.data)
      console.log(res.data)
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login setUser={setUser} />} />
        <Route path='/home' element={<Home setUser={setUser} authorized={authorized}/>} />
        <Route path='/trips' element={<Trip tripDeleted={tripDeleted} viewTripDetails={viewTripDetails} getUserTrips={getUserTrips} trips={trips} setUser={setUser} authorized={authorized}
        userId={userId} />} />
        <Route path='/trip/:id' element={<TripDetails tripUpdated={tripUpdated} setTripUpdated={setTripUpdated} setTripDeleted={setTripDeleted} getUserTrips={getUserTrips} selectedTrip={selectedTrip} setUser={setUser} authorized={authorized}/>} />
        <Route path='/search' element={<Search setUser={setUser} authorized={authorized}/>} />
      </Routes>
      
    </div>
  );
}

export default App;
