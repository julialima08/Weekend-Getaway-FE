import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { updateTrip } from '../services/Auth'


const UpdateTripForm = ({setTripId, tripId, setTripUpdated, selectedTrip, setButtonClicked, buttonClicked, tripUpdated}) => {
  
  const initialState = {
    title: '',
    destination: '',
    date: ''
  }
  const [formState, setFormState] = useState(initialState)

//   let navigate = useNavigate()
// let { trip_id } = useParams()
  const handleSubmit = async (event) => {
    event.preventDefault()
    // setTripId(trip_id)
    await updateTrip(selectedTrip.id, formState)
    setButtonClicked(!buttonClicked)
    setTripUpdated(true)
    console.log(tripUpdated)
  }
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        onChange={handleChange}
        value={formState.title}
        name='title'
        placeholder='title'
        ></input>
        <input
        onChange={handleChange}
        value={formState.destination}
        name='destination'
        placeholder='destination'
        ></input>
        <input
        onChange={handleChange}
        value={formState.date}
        name='date'
        placeholder='date'
        ></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UpdateTripForm