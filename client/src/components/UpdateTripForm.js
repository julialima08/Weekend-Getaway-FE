import { useState } from 'react'
import { updateTrip } from '../services/Auth'


const UpdateTripForm = ({setTripUpdated, selectedTrip, setButtonClicked, buttonClicked, tripUpdated}) => {
  
  const initialState = {
    title: '',
    destination: '',
    date: ''
  }
  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    await updateTrip(selectedTrip.id, formState)
    setButtonClicked(!buttonClicked)
    setTripUpdated(true)
    console.log(tripUpdated)
  }
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }
  return (
    <div className='update-trip'>
      <form onSubmit={handleSubmit}>
        <input
        onChange={handleChange}
        value={formState.title}
        name='title'
        placeholder='title'
        className='update-input'
        ></input>
        <input
        onChange={handleChange}
        value={formState.destination}
        name='destination'
        placeholder='destination'
        className='update-input'
        ></input>
        <input
        onChange={handleChange}
        value={formState.date}
        name='date'
        placeholder='date'
        className='update-input'
        ></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UpdateTripForm