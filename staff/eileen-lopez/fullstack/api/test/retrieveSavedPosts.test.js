const req = {
    method: 'GET',
    headers: {
        Authorization: 'Bearer 65684c87dc4ef0943016343f',
    },
}

fetch('http://localhost:4000/posts/saved', req)
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error))

            return
        }

        res.json()
            .then(posts => console.log(res.status, posts))
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))