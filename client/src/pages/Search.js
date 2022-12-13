import { useNavigate } from "react-router-dom"
import MainNav from "../components/MainNav"
import axios from 'axios'
import { useState } from 'react'
import SearchFlights from '../components/SearchFlights'

const Search = ({setUser, authorized, sid, setDate, setDestination, setOrigin, handleSubmit, getSearchResults, date, origin, destination, API_HOST, API_KEY}) => {

  let navigate = useNavigate()
  // const API_KEY= process.env.REACT_API_KEY
  // const API_HOST = process.env.REACT_API_HOST
  


  // const [destination, setDestination] = useState('');
  // const [date, setDate] = useState('');
  // const [origin, setOrigin] = useState('');
  // const [sid, setSid] = useState('')
  const [searchResults, setSearchResults] = useState({})

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   await axios.request(options).then(async function (response) {
  //     console.log(response.data.search_params.sid);
  //     await setSid(response.data.search_params.sid)
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  //   getSearchResults()
  //   // searchFlights(destination, date, origin);
  // }
  
//   const getSearchResults = async (event) => {
//     event.preventDefault()
//   await axios.request(options2).then(function (response) {
//     console.log(response.data);
//   }).catch(function (error) {
//     console.error(error);
//   });
// }
  // const options = {
  //   method: 'GET',
  //   url: 'https://travel-advisor.p.rapidapi.com/flights/create-session',
  //   params: {
  //     o1: `${origin}`,
  //     d1: `${destination}`,
  //     dd1: `${date}`,
  //     currency: 'USD',
  //     ta: '1'
  //   },
  //   headers: {
  //     'X-RapidAPI-Key': `${API_KEY}`,
  //     'X-RapidAPI-Host': `${API_HOST}`
  //   }
  // };

  // const options2 = {
  //   method: 'GET',
  //   url: 'https://travel-advisor.p.rapidapi.com/flights/poll',
  //   params: {sid: `${sid}`, so: 'PRICE', currency: 'USD'},
  //   headers: {
  //     'X-RapidAPI-Key': `${API_KEY}`,
  //     'X-RapidAPI-Host': `${API_HOST}`
  //   }
  // };
  
  



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
            <SearchFlights handleSubmit={(event) => handleSubmit(event)} getSearchResults={(event) => getSearchResults(event)} origin={origin} date={date} destination={destination} setDate={setDate} setDestination={setDestination} setOrigin={setOrigin}/>
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