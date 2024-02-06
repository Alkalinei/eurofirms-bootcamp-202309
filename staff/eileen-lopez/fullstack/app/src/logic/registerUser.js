import { validateText, validateEmail, validatePassword, validateFunction } from '../utils/validators'

function registerUser(name, email, password, callback) {
    validateText(name, 'name')
    validateEmail(email)
    validatePassword(password)
    validateFunction(callback, 'callback')

    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    }

    fetch('http://localhost:4000/users', req)
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

export default registerUser