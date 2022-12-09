import Login from './pages/Login';
import Home from './pages/Home'
import Trip from './pages/Trips';
import Search from './pages/Search';
import { Routes, Route } from 'react-router-dom'
import { CheckSession } from './services/Auth'
import { useState, useEffect } from 'react'
import './CSS/App.css';

function App() {
  const [user, setUser] = useState(null)
  const [authorized, setAuthorized] = useState(true)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    } else {
      setAuthorized(false)
    }
  }, [])

  let userId = localStorage.getItem('id')

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login setUser={setUser} />} />
        <Route path='/home' element={<Home setUser={setUser} authorized={authorized}/>} />
        <Route path='/trips' element={<Trip />} />
        <Route path='/search' element={<Search />} />
      </Routes>
      
    </div>
  );
}

export default App;
