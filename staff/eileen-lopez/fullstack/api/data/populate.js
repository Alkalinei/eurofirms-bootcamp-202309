const mongoose = require('mongoose')
const { User, Post } = require('./models')

const { Types: { ObjectId } } = mongoose


mongoose.connect('mongodb://127.0.0.1:27017/test').then(() => {
    const pepito = new User({ name: 'Pepito Grillo', email: 'pepito@grillo.com', password: '123123123' })
    pepito.save().then(() => console.log('pepito saved'))

    // const campa = new User({ name: 'Campa Nilla', email: 'campa@nilla.com', password: '123123123' })
    // campa.save().then(() => console.log('campa saved'))

    //User.deleteOne({ _id: new ObjectId('65607f164c29d64cb0c2b500') }).then(() => console.log('pepito deleted'))

    //User.updateOne({ _id: new ObjectId('65608156b92116f69ad659b5') }, { $set: { name: '🤡' } }).then(() => console.log('campa updated'))

    User.find().then(users => console.log(users))

    const post = new Post({ author: new ObjectId('6560873e8f3518573cbf334c'), image: 'https://ai-studio-assets.limewire.media/u/9b8d2745-b5c0-4689-9a03-d33cae5ecaba/image/7dad733e-6d94-45ae-aebe-4da69f21153c?Expires=1700827138&Signature=nd8Ad49vx9iCp6yhDM4umOjqeml0E0pl1nsn0MnYwbj7hhNNb6sTTqL~FNZ7nenJukqtojExYHIakoyzUUeatDo8v~J17ICjD2oKgpiCer92zlRnQ4CFdj9rCCeRFwCjlqnsesIljKH~DHopSOhX9Dlkkl~zvWzwAAdufx1UF0cg-bWEcU0NDT4QRLvLnzJw0iMk3U9OLdMM-zFSeQnlhzUDR4wm9aQQkHoU9EyoEcWep0~5eLUlaWJJ9eLooMjU3Kb3Fb9L~WtIlUjSaVYTN0Y7t~Yi~Vb1Bfo7iNUZmSwhuHDyK705VT6fVBf2pzqqFtBWa26xFQQyk-CvWfYGrQ__&Key-Pair-Id=K1U52DHN9E92VT', imageDescription: 'Campa with horse image', text: 'I love my horse' })

    post.save().then(() => console.log('campas post saved'))

    console.log('continue...')
})