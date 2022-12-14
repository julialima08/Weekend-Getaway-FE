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
  }

  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [origin, setOrigin] = useState('');
  const [sid, setSid] = useState(null)
  const [searchResults, setSearchResults] = useState(null)
  const API_KEY= process.env.REACT_API_KEY
  const API_HOST = process.env.REACT_API_HOST

  const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/flights/create-session',
    params: {
      o1: `${origin}`,
      d1: `${destination}`,
      dd1: `${date}`,
      currency: 'USD',
      ta: '1',
      c: '0'
    },
    headers: {
      'X-RapidAPI-Key': `ba93b620demshd994d6f58d1b9e8p182feejsnebaa3d3c1d4d`,
      'X-RapidAPI-Host': `travel-advisor.p.rapidapi.com`
    }
  };

  const options2 = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/flights/poll',
    params: {sid: `${sid}`, so: 'PRICE', currency: 'USD',
    ns: 'ONE_STOP',
    n: '30'
  },
    headers: {
      'X-RapidAPI-Key': `ba93b620demshd994d6f58d1b9e8p182feejsnebaa3d3c1d4d`,
      'X-RapidAPI-Host': `travel-advisor.p.rapidapi.com`
    }
  };

    const handleSubmit = async () => {
    await axios.request(options).then(async function (res) {
      await setSid(res.data.search_params.sid)
    })
    await axios.request(options2).then(function (response) {
        setSearchResults(response.data.itineraries)
      })
    // console.log(response.data);
    }
    const [tripId, setTripId] = useState(null)
  


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login setUser={setUser} />} />
        <Route path='/home' element={<Home setUser={setUser} authorized={authorized}/>} />
        <Route path='/trips' element={<Trip tripDeleted={tripDeleted} viewTripDetails={viewTripDetails} getUserTrips={getUserTrips} trips={trips} setUser={setUser} authorized={authorized}
        userId={userId} />} />
        <Route path='/trip/:id' element={<TripDetails viewTripDetails={viewTripDetails} tripUpdated={tripUpdated} setTripUpdated={setTripUpdated} setTripDeleted={setTripDeleted} getUserTrips={getUserTrips} selectedTrip={selectedTrip} setUser={setUser} authorized={authorized} setTripId={setTripId} tripId={tripId} />} />
        <Route path='/search' element={<Search date={date} origin={origin} destination={destination} setDate={setDate} setOrigin={setOrigin} setDestination={setDestination} API_HOST={API_HOST} API_KEY={API_KEY} sid={sid} setUser={setUser} authorized={authorized} handleSubmit={handleSubmit} searchResults={searchResults} trips={trips} tripId={tripId} />} />
      </Routes>
      
    </div>
  );
}

export default App;
