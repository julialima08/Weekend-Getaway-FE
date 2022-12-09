import RegisterForm from "../components/RegisterForm"
import { useState } from 'react'
import LoginForm from '../components/LoginForm'

const Login = ({ setUser }) => {
  const [isVisible, setIsVisible] = useState(true)
  const handleLoginClick = () => {
    setIsVisible(false)
  }

  const handleCreateClick = () => {
    setIsVisible(true)
  }

return (
  <div>
    <h1>Weekend Getaway</h1>
              {isVisible ? (
            <div className="login-form">
              <LoginForm setUser={setUser} />
              <div className="createHeaderDiv">
                <h3 className="createHeader1">Don't have an account?</h3>
              </div>
              <button onClick={handleLoginClick} className="homeButton">
                Create Account
              </button>
            </div>
          ) : (
            <div className="register-form">
              <RegisterForm setIsVisible={setIsVisible} />
              <h3 className="createHeader3">have an account already?</h3>
              <button onClick={handleCreateClick} className="homeButton">
                Login
              </button>
            </div>
          )}
  </div>
)
}

export default Login