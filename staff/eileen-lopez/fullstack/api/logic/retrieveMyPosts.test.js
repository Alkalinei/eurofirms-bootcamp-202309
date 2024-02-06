const mongoose = require('mongoose')

const retrieveMyPosts = require('./retrieveMyPosts')

mongoose.connect('mongodb://127.0.0.1:27017/test')

    .then(() => {
        try {
            retrieveMyPosts('6564c1912ba786cec95c7f3f', (error, posts) => {
                if (error) {
                    console.error(error)

                    return
                }
                console.log(posts)
            })
        } catch (error) {
            console.error(error)
        }
    })