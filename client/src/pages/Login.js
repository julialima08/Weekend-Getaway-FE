import RegisterForm from "../components/RegisterForm"
import { useState } from 'react'
import LoginForm from '../components/LoginForm'
import '../CSS/Login.css'

const Login = ({ setUser }) => {
  const [isVisible, setIsVisible] = useState(true)
  const handleLoginClick = () => {
    setIsVisible(false)
  }

  const handleCreateClick = () => {
    setIsVisible(true)
  }

return (
  <div className="login">
    <img className="login-pic" src="https://ucarecdn.com/a5f1511c-e65a-4ad2-ab94-359420384902/"></img>
              {isVisible ? (
            <div className="login-form">
              <LoginForm setUser={setUser} />
              <div className="createHeaderDiv">
                <h3 className="createHeader2">Don't have an account?</h3>
              </div>
              <button onClick={handleLoginClick} className="homeButton">
                Create Account
              </button>
            </div>
          ) : (
            <div className="register-form">
              <RegisterForm setIsVisible={setIsVisible} />
              <h3 className="createHeader">have an account already?</h3>
              <button onClick={handleCreateClick} className="homeButton">
                Login
              </button>
            </div>
          )}
  </div>
)
}

export default Login