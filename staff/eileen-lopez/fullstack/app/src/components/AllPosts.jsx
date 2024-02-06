import { useState, useEffect } from 'react'

import Posts from '../components/Posts'

import retrievePosts from '../logic/retrievePosts'

function AllPosts(props) {
    console.log('AllPosts')

    const [posts, setPosts] = useState([])

    useEffect(() => {
        refreshPosts()
    }, [props.timestamp])

    function refreshPosts() {
        try {
            retrievePosts(sessionStorage.userId, (error, posts) => {
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

export default AllPosts