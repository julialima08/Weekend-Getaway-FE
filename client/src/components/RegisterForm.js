import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import '../CSS/Login.css'

const RegisterForm = ({ setIsVisible }) => {
  let initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const [newUser, setNewUser] = useState(initialState)

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }

  const createUser = async (e) => {
    e.preventDefault()
    await RegisterUser({
      name: newUser.name,
      email: newUser.email,
      password: newUser.password
    })
    setNewUser(initialState)
    setIsVisible(true)
  }
  
return (
  <div>
  <form className="form" onSubmit={createUser}>
    <input
      placeholder="Full Name"
      onChange={handleChange}
      value={newUser.name}
      name="name"
      className="login-input"
    />
    <input
      placeholder="Email"
      onChange={handleChange}
      value={newUser.email}
      name="email"
      className="login-input"
    />
    <input
      placeholder="Password"
      onChange={handleChange}
      value={newUser.password}
      name="password"
      className="login-input"
    />
    <input
      placeholder="Confirm Password"
      onChange={handleChange}
      value={newUser.confirmPassword}
      name="confirmPassword"
      className="login-input"
    />
    <button
      disabled={
        (!newUser.email,
        !newUser.name,
        !newUser.password,
        !newUser.confirmPassword) ||
        newUser.confirmPassword !== newUser.password
      }
      className="button2"
    >
      Create Account
    </button>
  </form>
</div>
)
}

export default RegisterForm