import JWT from "../utils/jwt"

const context = {
    storage: sessionStorage,
    jwt: null
}

if (context.storage.token)
    context.jwt = new JWT(context.storage.token)

export default context