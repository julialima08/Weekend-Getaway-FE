import { useNavigate } from "react-router-dom"
import MainNav from "../components/MainNav"
import axios from 'axios'
import { useState } from 'react'

const Search = ({setUser, authorized}) => {

  let navigate = useNavigate()
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const searchFlights = {

  }

  const getSearchResults = async (e) => {
    e.preventDefault()
    await axios
      .request(searchFlights)
      .then(function (response) {
        setSearchResults(response.data)
        toggleSearched(true)
        setSearchQuery('')
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div>
      {authorized ? (
        <div>
          <MainNav setUser={setUser}/>
          <div>
            <h1>Search</h1>
            <Search
              onSubmit={getSearchResults}
              onChange={handleChange}
              value={searchQuery}
              authorized={authorized}
            />
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