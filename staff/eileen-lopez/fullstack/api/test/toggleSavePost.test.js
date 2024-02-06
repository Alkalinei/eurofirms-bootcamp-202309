const req = {
    method: 'PATCH',
    headers: {
        Authorization: 'Bearer 656db3fad816cd234ffab874'
    }
}

fetch('http://localhost:4000/posts/65686c275ef8e443ccc48336/saves', req)
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