const mongoose = require('mongoose')
const retrievePosts = require('./retrievePosts')
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            retrievePosts('6565d569fd874b98654ee32f', (error, posts) => {
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