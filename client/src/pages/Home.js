import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import MainNav from "../components/MainNav"
import '../CSS/Home.css'


const Home = ({ setUser, authorized }) => {
let navigate = useNavigate()
  return (
    
    <div>
      {authorized ? (
        <div>
          <MainNav setUser={setUser}/>
          <div className="header">
            <img className="home-pic" src='https://scied.ucar.edu/sites/default/files/styles/half_width/public/2021-10/cumulus-clouds.jpg?itok=qsNXhfWh'></img>
            <div className="logo-description">
            <img className="logo-pic" src="https://media.istockphoto.com/id/1152333400/vector/seaside-vacation-flat-vector-illustration.jpg?s=612x612&w=0&k=20&c=Btr6jTynZb7UYSNmixQtXuD6CNkBsplbPJKacD4U6ps="></img>
            <p className="description">Weekend Getaway is an application made for people who love to travel and stay organized while doing it. Users can create accounts and search for fligths, hotels, and activities for their next vacation! Once the user decides where and when their next vacation will be, they can create a new trip and start adding flights, hotels, and activities. Planning a vaction can get messy, allow us to organize your next weekend getaway.</p>
            </div>
          </div>
          <div className="home-options">
          <div className="home-trips">
            <img className="pic"  src="https://st2.depositphotos.com/1005979/12185/i/950/depositphotos_121856228-stock-photo-vacation-date-calendar-illustration.jpg" ></img>
            <div>
              <p>View a list of all the trips you care currently planning, edit trips, create new trips, and so much more!</p>
                <button onClick={()=> navigate('/trips')} >My Trips</button>
            </div>
          </div>
          <div>
          <img className="pic" src='https://images.unsplash.com/photo-1559268950-2d7ceb2efa3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80'></img>
            <div>
              <p>Search hundreds of Flights, Hotels, and Activities. Compare prices and get the best deal out there. </p>
              <button onClick={()=> navigate('/search')}>Search</button>
            </div>
          </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Your not authorized!</h1>
          <h2>Please login or create an account first</h2>
          <button onClick={()=> navigate('/')}>Back</button>
        </div>
      )}
      
    </div>
  )
}

export default Home