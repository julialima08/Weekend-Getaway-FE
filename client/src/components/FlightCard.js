import AddFlightToTrip from "./AddFlightToTrip"
import { useEffect, useState } from "react"
import axios from 'axios'
import { BASE_URL } from "../globals"

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
          {/* <span className="plane"><?xml version="1.0" ?><svg clip-rule="evenodd" fill-rule="evenodd" height="60" width="60" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><g stroke="#222"><line fill="none" stroke-linecap="round" stroke-width="30" x1="300" x2="55" y1="390" y2="390"/><path d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z" fill="#222" stroke-linejoin="round" stroke-width="10"/></g></svg></span> */}
      <span className="sfo">{props.arrivalAirport}</span>
      
      <span className="jfk jfkslip">{props.departureAirport2}</span>
      {/* <span className="plane planeslip"><?xml version="1.0" ?><svg clip-rule="evenodd" fill-rule="evenodd" height="50" width="50" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><g stroke="#222"><line fill="none" stroke-linecap="round" stroke-width="30" x1="300" x2="55" y1="390" y2="390"/><path d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z" fill="#222" stroke-linejoin="round" stroke-width="10"/></g></svg></span> */}
      <span className="sfo sfoslip">{props.arrivalAirport2}</span>
      <div className="sub-content">
        <span className="name">DEPARTURE DATE<br></br><span>{props.departure2}</span></span>
        <span className="flight">Price<br></br><span>{props.price}</span></span>
        <span className="boardingtime">ARRIVAL TIME<br></br><span>{props.arrival}</span></span>
            
        <span className="seat seatslip">DEPARTURE DATE<br></br><span>{props.departure2}</span></span>
        <span className="name nameslip">ARRIVAL TIME<br></br><span>{props.arrival2}</span></span>
        <span className='seat'>
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
