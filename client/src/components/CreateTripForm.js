import React, { useState } from 'react'
import '../CSS/popup.css'

const CreateTripForm = (props) => {
  const [popUp, setPopUp] = useState(false)

  const togglePopUp = () => {
    setPopUp(!popUp)
  }

  if (popUp) {
    document.body.classList.add('active-popUp')
  } else {
    document.body.classList.remove('active-popUp')
  }

  const handleSumbit = async (e) => {
    await props.createTrip(e)
    togglePopUp()
    props.setNewTrip(props.initialState)
  }

  const newTrip = props.newTrip

  return (
    <>
      <button onClick={togglePopUp} className="btn-popUp">
        Create Trip
      </button>

      {popUp && (
        <div className="popUp">
          <div onClick={togglePopUp} className="overlay"></div>
          <div className="popUp-content">
            <button className="close-popUp" onClick={togglePopUp}>
              CLOSE
            </button>
            <form onSubmit={handleSumbit}>
              <input
                className="input"
                type="text"
                value={newTrip.title}
                onChange={props.handleChange}
                placeholder={'Trip title'}
                name="title"
              />
              <input
                className="input"
                type="text"
                value={newTrip.destination}
                onChange={props.handleChange}
                placeholder={'destination'}
                name="destination"
              />
              <input
                className="input"
                type="text"
                value={newTrip.date}
                onChange={props.handleChange}
                placeholder={'trip start date(MM/DD/YYYY)'}
                name="date"
              />

              <button className="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default CreateTripForm
