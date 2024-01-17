import ky from "ky";
import {API_URL} from "../../../config";
import {UserType} from "../../../types/UserType";

export const me = async () => {
    return ky.get(`${API_URL}/user/me`, {credentials: "include"}).json<UserType>();
}