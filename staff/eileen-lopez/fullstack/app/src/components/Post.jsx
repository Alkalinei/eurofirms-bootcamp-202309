import toggleLikePost from '../logic/toggleLikePost'
import deletePost from '../logic/deletePost'
import toggleSavePost from '../logic/toggleSavePost'

import Button from './Button'

function Post(props) {
    console.log('Post')

    const post = props.post

    function handleLikeClick() {
        try {
            toggleLikePost(sessionStorage.userId, post.id, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                props.onLikeToggled()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    function handleDeleteClick() {
        const confirmed = confirm('Delete post?')

        if (confirmed)
            try {
                deletePost(sessionUserId, post.id, error => {
                    if (error) {
                        alert(error.message)

                        return
                    }

                    props.onDeleted()
                })
            } catch (error) {
                alert(error.message)
            }
    }

    function handleSaveClick() {
        try {
            toggleSavePost(sessionStorage.userId, post.id, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                props.onSaveToggled()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <article className="post">
        <h3>{post.author.name}</h3>

        <img className="post-image"
            src={post.image}
            alt={post.imageDescription}
            title={post.imageDescription} />

        <p>{post.text}</p>

        <Button onClick={handleLikeClick} title={post.liked ? 'Unlike' : 'Like'} aria-label={post.liked ? 'Unlike' : 'Like'}>{(post.liked ? '❤️' : '🩶') + ' ' + post.likes.length + ' likes'}</Button>

        <Button onClick={handleSaveClick} title={post.saved ? 'Unsave' : 'sSave'} aria-label={post.saved ? 'Unsave' : 'Save'}>{(post.saved ? '⭐️' : '✩')}</Button>

        {post.author.id === sessionStorage.userId ? <Button title="Delete" aria-label="Delete" onClick={handleDeleteClick}>🗑️</Button> : null}
    </article>
}

export default Post