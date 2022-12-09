import { useNavigate } from "react-router-dom"

const Trip = () => {
  let navigate = useNavigate()
return (
  <div>
    <h1>Trips</h1>
    <button onClick={()=>navigate('/home')}>back</button>
  </div>
)
}

export default Trip