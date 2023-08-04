class userActions {
    // AUTH
    static LOGGIN = {
        name: 'LOGGIN',
        action: 'LOGGIN',
        url: '/auth/login'
    }
    static ME = {
        name: 'ME',
        action: 'ME',
        url: '/auth/me'
    }
    // USERS
    static GET_USERS = {
        name: 'GET_USERS',
        action: 'GET_USERS',
        url: '/user'
    }
}

export default Object.freeze(userActions)