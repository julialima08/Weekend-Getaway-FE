import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import MainNav from "../components/MainNav"


const Home = ({ setUser, authorized }) => {
let navigate = useNavigate()
  return (
    
    <div>
      {authorized ? (
        <MainNav setUser={setUser}/>
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

export default Home