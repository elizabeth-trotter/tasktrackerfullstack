import { IToken, IUserData, IUserInfo } from "@/Interfaces/Interface";

const url = "https://team3tasktrackerapi.azurewebsites.net";
let userData: IUserData;

export const createAccount = async (createUser: IUserInfo) => {
    const res = await fetch(url + '/User/AddUser', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(createUser)
    });

    if (!res.ok) {
        const message = "An error has Occurred " + res.status;
        throw new Error(message);
    }

    const data = await res.json();
}

export const login = async (loginUser: IUserInfo) => {
    const res = await fetch(url + "/User/Login", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(loginUser)
    });
    if (!res.ok) {
        const message = "An error has Occurred " + res.status;
        throw new Error(message);
    }

    const data: IToken = await res.json();
    return data;
}

export const getUserData = async (username: string) => {
    const res = await fetch(url + "/User/GetUserByUsername/" + username);
    const data = await res.json();
    userData = data;
}

export const loggedInData = () => {
    return userData;
}