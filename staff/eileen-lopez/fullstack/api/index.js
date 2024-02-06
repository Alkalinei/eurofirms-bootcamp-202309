const express = require('express')
const mongoose = require('mongoose')

const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')
const createPost = require('./logic/createPost')
const retrievePosts = require('./logic/retrievePosts')
const toggleLikePost = require('./logic/toggleLikePost')
const updateUserPassword = require('./logic/updateUserPassword')
const toggleSavePost = require('./logic/toggleSavePost')
const deletePost = require('./logic/deletePost')
const retrieveSavedPosts = require('./logic/retrieveSavedPosts')
const retrieveMyPosts = require('./logic/retrieveMyPosts')

mongoose.connect('mongodb://127.0.0.1/api')
    .then(() => {
        const api = express()

        api.get('/helloworld', (req, res) => res.send('Hello, World!'))

        api.get('/holamundo', (req, res) => res.send('Hola, Mundo!'))

        api.get('/hello', (req, res) => {
            const name = req.query.name

            res.send(`Hello, ${name}!`)
        })

        const jsonBodyParser = express.json()

        const cors = (req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*')
            res.header('Access-Control-Allow-Methods', '*')
            res.header('Access-Control-Allow-Headers', '*')

            next()
        }

        api.use('*', cors)

        api.post('/users', cors, jsonBodyParser, (req, res) => {
            const body = req.body
            const { name, email, password } = body

            try {
                registerUser(name, email, password, error => {
                    if (error) {
                        res.status(400).json({ error: error.message })

                        return
                    }

                    res.status(201).send()
                })
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.post('/users/auth', jsonBodyParser, (req, res) => {
            const body = req.body
            const { email, password } = body

            try {
                authenticateUser(email, password, (error, userId) => {
                    if (error) {
                        res.status(400).json({ error: error.message })
                        return
                    }

                    res.json(userId)
                })
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.get('/users', (req, res) => {
            const userId = req.headers.authorization.slice(7)

            try {
                retrieveUser(userId, (error, user) => {
                    if (error) {
                        res.status(400).json({ error: error.message })

                        return
                    }

                    res.json(user)
                })
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.post('/posts', jsonBodyParser, (req, res) => {
            const userId = req.headers.authorization.slice(7)
            const body = req.body
            const { image, imageDescription, text } = body

            try {
                createPost(userId, image, imageDescription, text, error => {
                    if (error) {
                        res.status(400).json({ error: error.message })

                        return
                    }

                    res.status(201).send()
                })
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.get('/posts', (req, res) => {
            const userId = req.headers.authorization.slice(7)

            try {
                retrievePosts(userId, (error, posts) => {
                    if (error) {
                        res.status(400).json({ error: error.message })

                        return
                    }

                    res.json(posts)
                })
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.get('/posts/saved', (req, res) => {
            const userId = req.headers.authorization.slice(7)

            try {
                retrieveSavedPosts(userId, (error, posts) => {
                    if (error) {
                        res.status(400).json({ error: error.message })

                        return
                    }

                    res.json(posts)
                })
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.get('/posts/mine', (req, res) => {
            const userId = req.headers.authorization.slice(7)

            try {
                retrieveMyPosts(userId, (error, posts) => {
                    if (error) {
                        res.status(400).json({ error: error.message })

                        return
                    }

                    res.json(posts)
                })
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.patch('/posts/:postId/likes', (req, res) => {
            const userId = req.headers.authorization.slice(7)
            const postId = req.params.postId

            try {
                toggleLikePost(userId, postId, error => {
                    if (error) {
                        res.status(400).json({ error: error.message })

                        return
                    }

                    res.status(204).send()
                })
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.patch('/posts/:postId/saved', (req, res) => {
            const userId = req.headers.authorization.slice(7)
            const postId = req.params.postId

            try {
                toggleSavePost(userId, postId, error => {
                    if (error) {
                        res.status(400).json({ error: error.message })

                        return
                    }

                    res.status(204).send()
                })
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.delete('/posts/:postId', (req, res) => {
            const userId = req.headers.authorization.slice(7)
            const postId = req.params.postId

            try {
                deletePost(userId, postId, error => {
                    if (error) {
                        res.status(400).json({ error: error.message })

                        return
                    }

                    res.status(204).send()
                })
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.patch('/users/password', jsonBodyParser, (req, res) => {
            const userId = req.headers.authorization.slice(7)

            const body = req.body
            const { password, newPassword, repeatNewPassword } = body

            try {
                updateUserPassword(userId, password, newPassword, repeatNewPassword, error => {
                    if (error) {
                        res.status(400).json({ error: error.message })

                        return
                    }

                    res.status(204).send()
                })
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.listen(4000, () => console.log('API listening on port 4000'))
    })