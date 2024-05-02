import context from "./context";

function logoutUser() {
    delete context.storage.token
    context.jwt = null
}

export default logoutUser