import { useNavigate } from "react-router-dom"
import MainNav from "../components/MainNav"
import axios from 'axios'
import { useState, useEffect } from 'react'
import SearchFlights from '../components/SearchFlights'
import FlightCard from "../components/FlightCard"
import { BASE_URL } from "../globals"
import '../CSS/Search.css'

const Search = ({setUser, authorized, setDate, setDestination, setOrigin, handleSubmit, date, origin, destination, searchResults, tripId}) => {

  let navigate = useNavigate()

  const [trips, setTrips] = useState(null)
  let userId = localStorage.getItem('id')

  const getTrips = async () => {
    console.log('hello')
    let res = await axios.get(`${BASE_URL}/user/${userId}`)
    setTrips(res.data.Trips)
    console.log(res)
  }

  useEffect(()=> {
    getTrips()
  }, [])



  return (
    <div >
      {authorized ? (
        <div className="search">
          <MainNav setUser={setUser}/>
          <div className="search-page">
            <SearchFlights handleSubmit={handleSubmit} origin={origin} date={date} destination={destination} setDate={setDate} setDestination={setDestination} setOrigin={setOrigin}/>
            <div className="searchResults">
              {searchResults ? (
                <div>
                  {searchResults.map((result) => (
                  <FlightCard 
                  price={result.l[0].pr.dp}
                  departure={result.f[0].l[0].dd}
                  arrival={result.f[0].l[0].ad}
                  departureAirport={result.f[0].l[0].da}
                  arrivalAirport={result.f[0].l[0].aa}
                  airline={result.f[0].l[0].m}
                  departure2={result.f[0].l[1].dd}
                  arrival2={result.f[0].l[1].ad}
                  departureAirport2={result.f[0].l[1].da}
                  arrivalAirport2={result.f[0].l[1].aa}
                  tripId={tripId}
                  trips={trips}
                  /> 
                  ))}
                </div>
              ) : (
              <h1>Search For Flights</h1>
              )}
            </div>
            <button onClick={()=>navigate('/home')}>back</button>
          </div>
        </div>
      ) : (
        <div>
          <h1>Your not authorized!</h1>
          <h2>Please login or create an account first</h2>
          <button className="back" onClick={()=> navigate('/')}>Back</button>
        </div>
      )}
    </div>
  )
}

export default Search