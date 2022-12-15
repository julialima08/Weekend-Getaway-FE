import { useNavigate } from "react-router-dom"
import '../CSS/Search.css'

const MainNav = ({ setUser }) => {

  let navigate = useNavigate()
  const logOutUser = () => {
    setUser(null)
    localStorage.clear()
    navigate('/')
  }

return (
  <div className="nav">
    <div className="bnt">
      <button className="nav-buttons" onClick={()=> navigate('/home')}>Home</button>
      <button className="nav-buttons" onClick={()=> navigate('/trips')}>My Trips</button>
      <button className="nav-buttons" onClick={()=> navigate('/search')}>Search</button>
    </div>
    <div className="logout">
      <button className="nav-buttons" onClick={logOutUser}>Logout</button>
    </div>
  </div>
)
}

export default MainNav