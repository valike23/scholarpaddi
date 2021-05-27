import type { Iuser } from "./common";

export const RETRIEVE_USER = (): Iuser| boolean=>{
    let user: Iuser = {};
    if (sessionStorage.getItem("user")) {
        user = JSON.parse(sessionStorage.getItem("user"));
        return user;
    }
    else{
        return false;
    }
}