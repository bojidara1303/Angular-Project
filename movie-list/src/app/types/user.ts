export interface User {
    _id: string,
    email: string,
    password: string,
}

export interface UserForAuthenticaion {
    username: string,
    email: string,
    password: string
}