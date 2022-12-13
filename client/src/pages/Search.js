import { useNavigate } from "react-router-dom"
import MainNav from "../components/MainNav"
import axios from 'axios'
import { useState } from 'react'
import SearchFlights from '../components/SearchFlights'

const Search = ({setUser, authorized}) => {

  let navigate = useNavigate()
  const API_KEY= process.env.REACT_API_KEY
  const APP_SECRET = process.env.REACT_API_SECRET
  const ACCESS_TOKEN = process.env.REACT_ACCESS_TOKEN


  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [origin, setOrigin] = useState('');
  const [searchResults, setSearchResults] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault();
    searchFlights(destination, date, origin);
  }
  const searchFlights = async (destination, date, origin) => {
const res = await axios.get({
  BaseURL: `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${date}&adults=1&nonStop=false&max=250`,
  params: {
    
  },
  headers: {
    Authorization: `${ACCESS_TOKEN}`,
    client_id: `${API_KEY}`,
    client_secret: `${APP_SECRET}`
  }
})
console.log(res.data)
  }

  // const [searchResults, setSearchResults] = useState([])
  // const [searched, toggleSearched] = useState(false)
  // const [searchQuery, setSearchQuery] = useState('')


  // const getSearchResults = async (e) => {
  //   e.preventDefault()
  //   await axios
  //     .request(searchFlights)
  //     .then(function (response) {
  //       setSearchResults(response.data)
  //       toggleSearched(true)
  //       setSearchQuery('')
  //     })
  //     .catch(function (error) {
  //       console.error(error)
  //     })
  // }

  // const handleChange = (event) => {
  //   setSearchQuery(event.target.value)
  // }

  return (
    <div>
      {authorized ? (
        <div>
          <MainNav setUser={setUser}/>
          <div>
            <h1>Search</h1>
            {/* <Search
              onSubmit={getSearchResults}
              onChange={handleChange}
              value={searchQuery}
              authorized={authorized}
            /> */}
            <SearchFlights handleSubmit={handleSubmit} origin={origin} date={date} destination={destination} setDate={setDate} setDestination={setDestination} setOrigin={setOrigin}/>
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

export default Search