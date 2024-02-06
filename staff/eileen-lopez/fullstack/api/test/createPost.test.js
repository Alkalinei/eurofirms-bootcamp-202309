const req = {
    method: 'POST',
    headers: {
        Authorization: 'Bearer 656db3fad816cd234ffab874',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ image: 'https://wallpapers.com/images/hd/cute-minion-happy-bob-v1x9tfcn0rznkvvd.jpg', imageDescription: 'minion image', text: 'hello minion' })
}

fetch('http://localhost:4000/posts', req)
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error))

            return
        }

        console.log(res.status)
    })
    .catch(error => console.error(error))