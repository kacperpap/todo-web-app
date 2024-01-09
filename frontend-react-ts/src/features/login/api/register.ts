import {API_URL} from "../../../config";
import ky from "ky";
import {RegisterFormType} from "../../../types/RegisterFormType";


export const register = async (data: RegisterFormType) => {
    return ky.post(`${API_URL}/user`, {json: data, credentials: "include"}).json<RegisterFormType>();
}

