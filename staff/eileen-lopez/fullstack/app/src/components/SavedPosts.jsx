import { useState, useEffect } from 'react'

import retrieveSavedPosts from '../logic/retrieveSavedPosts'

import Posts from './Posts'

function SavedPosts() {
    console.log('SavedPosts')

    const [posts, setPosts] = useState([])

    useEffect(() => {
        refreshPosts()
    }, [])

    function refreshPosts() {
        try {
            retrieveSavedPosts((error, posts) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setPosts(posts)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    function handlePostLikeToggled() {
        refreshPosts()
    }

    function handlePostDeleted() {
        refreshPosts()
    }

    function handlePostSaveToggled() {
        refreshPosts()
    }

    return <Posts posts={posts} onPostLikeToggled={handlePostLikeToggled} onPostSaveToggled={handlePostSaveToggled} onPostDeleted={handlePostDeleted} />
}

export default SavedPosts