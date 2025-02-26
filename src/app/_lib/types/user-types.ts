export type UserType = {
    id: number,
    email: string,
    username: string,
    name: string,
    password: string,
    status: string
}

export type UserLoginType = {
    username: string,
    password: string,
}