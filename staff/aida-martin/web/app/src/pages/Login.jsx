import './Login.css'
import { useContext } from 'react'
import Context from '../Context'
import { context } from '../ui'
import authenticateUser from '../logic/authenticateUser'

export default function Login ({ onRegisterClick, onUserLoggedIn }) {
  const { alert } = useContext(Context)

  const handleRegisterClick = event => {
    event.preventDefault()

    onRegisterClick()
  }

  const handleLogin = event => {
    event.preventDefault()

    const email = event.target.email.value
    const password = event.target.password.value

    try {
      authenticateUser(email, password, (error, userId) => {
        if (error) {
          alert(error.message, 'error')

          return
        }

        context.userId = userId

        onUserLoggedIn()
      })
    } catch (error) {
      alert(error.message, 'warn')
      // errorShow(registerError, error);
    }
  }

  return (
    <section className='login form-window'>
      <h1 className='title'>WELCOME!</h1>

      <form className='form' onSubmit={handleLogin}>
        <input className='input' type='email' name='email' placeholder='Email' />

        <input
          className='input'
          type='password'
          name='password'
          placeholder='Password'
        />

        <a href='#' className='forgot-password-link link'>Forgot password?</a>

        <p className='login-error error off' />

        <button className='button login-button'>LOG IN</button>
      </form>

      <p className='register-answer'>
        Not a member? <a href='#' onClick={handleRegisterClick} className='register-link link'>Sign up here</a>
      </p>
    </section>
  )
}
