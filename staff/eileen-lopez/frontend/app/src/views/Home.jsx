import { useState } from 'react'
import retrieveUser from '../logic/retrieveUser'

import Button from '../components/Button'
import Link from '../components/Link'
import Field from '../components/Field'
import Container from '../components/Container'
import MyPosts from '../components/MyPosts'
import SavedPosts from '../components/SavedPosts'
import AllPosts from '../components/AllPosts'
import NewPost from '../components/NewPost'
import Logo from '../components/Logo'

function Home(props) {
    const [view, setView] = useState(null)
   
    let name = null

    try {
        const user = retrieveUser(window.sessionUserId)

        name = user.name
    } catch (error) {
        alert(error.message)
    }

    function handleLogoutClick() {
        window.sessionUserId = null

        props.onLogout()
    }

    function handleNewPostClick() {
        setView('new-post')
    }

    function handleNewPostCancelClick() {
        setView(null)
    }
    function handleNewPostSubmit() {
        setView(null)
    }

    function handleSavedClick(event) {
        event.preventDefault()

        setView('saved')
    }

    function handleHomeClick(event) {
        event.preventDefault()

        setView(null)
    } 

    function handleMyPostsClick(event) {
        event.preventDefault()

        setView('my-posts')
    }

    return <Container>
        <header className="header" aria-label="Header">
            <Link onClick={handleHomeClick}><Logo /></Link>
            <span className='Username' aria-label="User name">{name}</span>
            <Button title="New post" aria-label="New post (+)" onClick={handleNewPostClick}>+</Button>
            <Link onClick={handleSavedClick}>Saved</Link>
            <Button onClick={handleLogoutClick}>Logout</Button>
        </header>

        {view === 'new-post' ? <NewPost onNewPostSubmit={handleNewPostSubmit} onNewPostCancelClick={handleNewPostCancelClick} /> : null}

        {view === null || view === 'new-post' ? <AllPosts /> : null}
            
        {view === 'saved' ? <SavedPosts /> : null}
        
        {view === 'my-posts' ? <MyPosts /> : null}
    </Container>
}

export default Home