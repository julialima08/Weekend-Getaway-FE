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
            <img className="home-pic" src='https://ucarecdn.com/2571c0e0-8d8a-49ab-a9c6-fca85f065bec/'></img>
            <div className="logo-description">
              <div>
            <img className="logo-pic" src="https://ucarecdn.com/a5f1511c-e65a-4ad2-ab94-359420384902/"></img></div>
            <div><p className="description">Weekend Getaway is an application made for people who love to travel and stay organized while doing it. Users can create accounts and search for fligths, hotels, and activities for their next vacation! Once the user decides where and when their next vacation will be, they can create a new trip and start adding flights, hotels, and activities. Planning a vaction can get messy, allow us to organize your next weekend getaway.</p></div>
            </div>
          </div>
          <div className="home-options">
          <div className="home-trips">
          <div class="windowSeat">
            <div class="window">
            <div class="clouds"></div>
            <div class="wing"></div>
             <input id='flap' type='checkbox' />
            <label class='flap' for='flap'></label>
            </div>
            </div>
            <div>
              <p>View a list of all the trips you care currently planning, edit trips, create new trips, and so much more!</p>
                <button onClick={()=> navigate('/trips')} >My Trips</button>
            </div>
          </div>
          <div className="home-trips">
          <div class="windowSeat">
            <div class="window">
            <div class="clouds"></div>
            {/* <div class="wing"></div> */}
             <input id='flap2' type='checkbox' />
            <label class='flap2' for='flap2'></label>
            </div>
            </div>
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

// please give me css style for this div with only these colors: 
// #FFFFFF
// #011638
// #388697
// #d2d7df
// #cd4b13

// this is the div to style:
//  <div className="home-trips">
//           <div class="windowSeat">
//             </div>
//             <div>
//               <p>Search hundreds of Flights, Hotels, and Activities. Compare prices and get the best deal out there. </p>
//               <button onClick={()=> navigate('/search')}>Search</button>
//             </div>
//           </div>
export default Home
