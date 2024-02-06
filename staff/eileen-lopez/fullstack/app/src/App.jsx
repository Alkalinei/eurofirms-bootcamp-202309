import Login from './views/Login'
import React from 'react'
import Register from './views/Register'
import Home from './views/Home'

function App() {
  console.log('App')

  const viewState = React.useState(sessionStorage.userId? 'home':'login')
  // const viewState = React.useState('home')
  const view = viewState[0]
  const setView = viewState[1]

  function handleRegisterShow() {
    setView('register')
  }

  function handleLoginShow() {
    setView('login')
  }

  function handleHomeShow() {
    setView('home')
  }

  return <>
    {view === 'login' ? <Login onSuccess={handleHomeShow} onRegisterClick={handleRegisterShow} /> : null}

    {view === 'register' ? <Register onSuccess={handleLoginShow} onLoginClick={handleLoginShow} /> : null}

    {view === 'home' ? <Home onLogout={handleLoginShow} /> : null}
  </>
}

export default App