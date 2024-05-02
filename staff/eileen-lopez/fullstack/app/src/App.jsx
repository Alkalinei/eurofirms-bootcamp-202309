import Login from './views/Login'
import React from 'react'
import Register from './views/Register'
import Home from './views/Home'

import logoutUser from './logic/logoutUser'

import { JWTExpiredError } from './utils/errors'

function App() {
  console.log('App')

  const [view, setView] = React.useState(sessionStorage.token ? 'home' : 'login')

  function handleRegisterShow() {
    setView('register')
  }

  function handleLoginShow() {
    setView('login')
  }

  function handleHomeShow() {
    setView('home')
  }

  function handleError(error) {
    if (error instanceof JWTExpiredError) {
      logoutUser()

      setView('login')
    }
  }

  return <>
    {view === 'login' ? <Login onSuccess={handleHomeShow} onRegisterClick={handleRegisterShow} /> : null}

    {view === 'register' ? <Register onSuccess={handleLoginShow} onLoginClick={handleLoginShow} /> : null}

    {view === 'home' ? <Home onLogout={handleLoginShow} onError={handleError} /> : null}
  </>
}

export default App