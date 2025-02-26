import { userData } from "../data/user-data";

export async function getUsers() {
    return userData
}

export async function getUserDetail(username: string) {
    return userData.find(user => user.username === username)
}