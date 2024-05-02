import Container from '../components/Container'
import Field from '../components/Field'
import Form from '../components/Form'
import Button from '../components/Button'

import createNewPost from '../logic/createNewPost'

function NewPost(props) {
    console.log('NewPost')

    function handleNewPostSubmit(event) {
        event.preventDefault()

        const imageInput = event.target.querySelector('#image-field')
        const imageDescriptionInput = event.target.querySelector('#image-description-field')
        const textInput = event.target.querySelector('#text-field')

        const image = imageInput.value
        const imageDescription = imageDescriptionInput.value
        const text = textInput.value

        try {
            createNewPost(image, imageDescription, text, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                props.onNewPostSubmit()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    function handleCancelClick() {
        props.onNewPostCancelClick()
    }

    return <Container align="center">
        <h2>New post</h2>

        <Form onSubmit={handleNewPostSubmit}>
            <Field type="url" id="image-field" required>Image</Field>

            <Field type="text" id="image-description-field" required>Image description</Field>

            <Field type="text" id="text-field" required>Text</Field>

            <Button type="submit">Post</Button>
            <Button onClick={handleCancelClick}>Cancel</Button>
        </Form>
    </Container>
}

export default NewPost