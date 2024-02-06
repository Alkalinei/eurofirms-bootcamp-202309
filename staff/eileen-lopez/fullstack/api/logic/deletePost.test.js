const mongoose = require('mongoose')
const deletePost = require('./deletePost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            deletePost('65608715bab5d765008aa494', '6560899f724c642d12657e2b', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('deleted')
            })
        } catch (error) {
            console.error(error)
        }
    })