import { validateEmail, validatePassword, validateFunction } from '../utils/validators'

function authenticateUser(email, password, callback) {
    validateEmail(email)
    validatePassword(password)
    validateFunction(callback, 'callback')

    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }

    fetch('http://localhost:4000/users/auth', req)
        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => callback(new Error(body.error)))
                    .catch(error => callback(error))

                return
            }

            res.json()
                .then(body => callback(null, body))
                .catch(error => callback(error))
        })
        .catch(error => console.error(error))
}

export default authenticateUser