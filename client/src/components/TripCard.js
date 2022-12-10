const TripCard = (props) => {
return (
  <div className="trip-card" onClick={props.onClick}>
    <h1>{props.title}</h1>
    <h2>{props.destination}</h2>
    <h2>{props.date}</h2>
  </div>
)
}

export default TripCard