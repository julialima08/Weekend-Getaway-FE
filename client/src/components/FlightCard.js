import AddFlightToTrip from "./AddFlightToTrip"
import '../CSS/Trips.css'

const FlightCard = (props) => {

  let flightInfo = {
    price: props.price,
    departure: props.departure,
    arrival: props.arrival,
    departureAirport: props.departureAirport,
    arrivalAirport: props.arrivalAirport,
    airline: props.airline,
    departure2: props.departure2,
    arrival2: props.arrival2,
    departureAirport2: props.departureAirport2,
    arrivalAirport2: props.arrivalAirport2,
    tripId: props.tripId
  }

  return (
    <div>
    <div className="box">
      <div className="clip"></div>
        <ul className="left">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
  
        <ul className="right">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
  
      <div className="ticket">
        <span className="airline">{props.airline}</span>
        <span className="airline airlineslip">{props.airline}</span>
        <span className="boarding">Flight Ticket</span>
        <div className="content">
          <span className="jfk">{props.departureAirport}</span>
          <span className="plane">
            <img className="p" src="https://ucarecdn.com/56d225a3-3c96-47e7-9417-b23285e0c881/"></img>
          </span>
      <span className="sfo">{props.arrivalAirport}</span>
      
      <span className="jfk jfkslip">{props.departureAirport2}</span>
      <span className="plane2">
            <img className="p" src="https://ucarecdn.com/56d225a3-3c96-47e7-9417-b23285e0c881/"></img>
          </span>
      <span className="sfo sfoslip">{props.arrivalAirport2}</span>
      <div className="sub-content">
        <span className="name">DEPARTURE DATE<br></br><span>{props.departure2}</span></span>
        <span className="flight">Price<br></br><span>{props.price}</span></span>
        <span className="boardingtime">ARRIVAL TIME<br></br><span>{props.arrival}</span></span>
            
        <span className="seat seatslip">DEPARTURE DATE<br></br><span>{props.departure2}</span></span>
        <span className="name nameslip">ARRIVAL TIME<br></br><span>{props.arrival2}</span></span>
        <span className='add'>
        <AddFlightToTrip  trips={props.trips}  flight={flightInfo}/>
        </span>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default FlightCard
