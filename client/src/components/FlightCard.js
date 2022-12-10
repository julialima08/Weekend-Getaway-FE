const FlightCard = (props) => {
  return (
    <div>
      <h3>{props.airline}</h3>
      <h3>{props.price}</h3>
      <h3>{props.departure}</h3>
      <h3>{props.arrival}</h3>
      <h3>{props.departureCity}</h3>
      <h3>{props.arrivalCity}</h3>
      <h3>{props.departureAirport}</h3>
      <h3>{props.arrivalAirport}</h3>
      <h3>{props.duration}</h3>
      <button onClick={props.onClick}>Remove flight</button>
    </div>
  )
}

export default FlightCard