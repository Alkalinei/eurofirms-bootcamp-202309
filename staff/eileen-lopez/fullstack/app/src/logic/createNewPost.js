import { validateText, validateUrl, validateFunction } from '../utils/validators'
import context from './context'

function createNewPost(image, imageDescription, text, callback) {
    validateUrl(image, 'image url')
    validateText(imageDescription, 'image description')
    validateText(text, 'text')
    validateFunction(callback, 'callback')

    const req = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${context.storage.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image, imageDescription, text })
    }

    fetch('http://localhost:4000/posts', req)
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

export default createNewPost