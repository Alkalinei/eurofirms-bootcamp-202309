const { validateText, validateEmail, validatePassword, validateFunction } = require('./helpers/validators')

const { User } = require('../data/models')

function registerUser(name, email, password, callback) {
    validateText(name, 'name')
    validateEmail(email, 'email')
    validatePassword(password, 'password')
    validateFunction(callback, 'callback')

    User.create({ name, email, password })
        .then(() => callback(null))
        .catch(error => {
            if (error.code === 11000) {
                callback(new Error('user already exists'))

                return
            }

            callback(error)
        })
}

module.exports = registerUser