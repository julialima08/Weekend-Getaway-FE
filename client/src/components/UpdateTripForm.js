import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { updateTrip } from '../services/Auth'


const UpdateTripForm = ({tripId, setTripUpdated, selectedTrip, setButtonClicked, buttonClicked}) => {
  
  const initialState = {
    title: '',
    destination: '',
    date: ''
  }
  const [formState, setFormState] = useState(initialState)

  let navigate = useNavigate()

  const handleSubmit = async (event) => {
    let tripId = parseInt(selectedTrip.id)
    event.preventDefault()
    await updateTrip(tripId, formState)
    setTripUpdated(true)
    setButtonClicked(!buttonClicked)
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