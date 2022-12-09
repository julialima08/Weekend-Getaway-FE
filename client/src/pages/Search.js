import { useNavigate } from "react-router-dom"

const Search = () => {
  let navigate = useNavigate()
  return (
    <div>
      <h1>Search</h1>
      <button onClick={()=>navigate('/home')}>back</button>
    </div>
  )
}

export default Search