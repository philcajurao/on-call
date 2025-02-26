import { UserLoginType } from '../types/user-types';
import { getUsers } from './user-services';

export const AuthService = {
    async login(UserLoginData: UserLoginType) {
        try {
            const {username, password} = UserLoginData;
            
            return (await getUsers()).find(user => user.username === username && user.password === password)
            
        } catch (error) {
            console.log(error);
        }
    }
}

