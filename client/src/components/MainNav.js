import { useNavigate } from "react-router-dom"

const MainNav = ({ setUser }) => {

  let navigate = useNavigate()
  const logOutUser = () => {
    setUser(null)
    localStorage.clear()
    navigate('/')
  }

return (
  <div>
    <div className="nav-buttons">
      <button onClick={()=> navigate('/home')}>Home</button>
      <button onClick={()=> navigate('/trips')}>My Trips</button>
      <button onClick={()=> navigate('/search')}>Search</button>
    </div>
    <div className="logout-button">
      <button onClick={logOutUser}>Logout</button>
    </div>
  </div>
)
}

export default MainNav