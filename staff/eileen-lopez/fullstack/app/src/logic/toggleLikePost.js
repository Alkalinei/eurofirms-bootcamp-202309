import { validateText, validateFunction } from '../utils/validators'
import context from './context'

function toggleLikePost(postId, callback) {
    validateText(postId, 'post id')
    validateFunction(callback, 'callback')

    const req = {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${context.storage.token}`
        }
    }

    fetch(`http://localhost:4000/posts/${postId}/likes`, req)
        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => callback(new Error(body.error)))
                    .catch(error => callback(error))

                return
            }

            callback(null)
        })
        .catch(error => callback(error))
}

export default toggleLikePost