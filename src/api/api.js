import * as axios from "axios";

const instance = axios.create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers: {
        "API-KEY":"94e81fc4-4e03-4aff-a601-8c8664f96c04"
    }
});


export const usersAPI= {getUsers(currentPage, pageSize) {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId) {
       return  instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId) {
        return  instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
}
