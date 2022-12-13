import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import '../CSS/Login.css'

const LoginForm = ({ setUser }) => {
  const initialState = { email: '', password: '' }
  const [formValues, setFormValues] = useState(initialState)

  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setUser(payload)
    setFormValues(initialState)
    navigate('/home')
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          onChange={handleChange}
          value={formValues.email}
          name="email"
          className="login-input"
        />
        <input
          placeholder="Password"
          onChange={handleChange}
          value={formValues.password}
          name="password"
          className="login-input"
        />
        <button
          disabled={!formValues.email || !formValues.password}
          className="button2"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
