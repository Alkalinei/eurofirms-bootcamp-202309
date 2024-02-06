const { validateText, validateFunction } = require('./helpers/validators')

const { User } = require('../data/models')

function retrieveUser(userId, callback) {
    validateText(userId, 'user id')
    validateFunction(callback, 'callback')

    User.findById(userId).select('-_id -email -password -saved -__v').lean()
        .then(user => {
            if (!user) {
                callback(new Error('user not found'))

                return
            }

            callback(null, user)
        })
        .catch(error => {
            callback(error)
        })
}

module.exports = retrieveUser