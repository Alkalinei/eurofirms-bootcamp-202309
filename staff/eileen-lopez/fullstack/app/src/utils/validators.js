import { JWTExpiredError } from "./errors"

function validateText(text, explain) {
    if (typeof text !== 'string') throw new TypeError(explain + ' is not a string')
    if (text.trim().length === 0) throw new Error(explain + ' is empty')
}

function validateEmail(email) {
    validateText(email, 'email')
    if (!email.includes('@')) throw new Error('email is not valid')
    if (!email.includes('.')) throw new Error('email is not valid')
}

function validatePassword(password) {
    validateText(password, 'password')
    if (password.length < 8) throw new RangeError('password length is lower than 8')
}

function validateUrl(url, explain) {
    validateText(url, explain)
    if (!url.startsWith('http')) throw new Error(explain + ' is not valid')
}

function validateNumber(number, explain) {
    if (typeof number !== 'number') throw new TypeError(explain + ' is not a number')
}

function validateFunction(func, explain) {
    if (typeof func !== 'function') throw new TypeError(explain + ' is not a function')
}

function validateJWT(jwt) {
    if (jwt.isExpired()) throw new JWTExpiredError('JWT expired')
}

export {
    validateText,
    validateEmail,
    validatePassword,
    validateUrl,
    validateNumber,
    validateFunction,
    validateJWT
}