import {API_URL} from "../../../config";
import {TodoFormValues} from "../../../types/TodoFormValues";
import ky from "ky";
import {TodoType} from "../../../types/TodoType";
import {RegisterFormType} from "../../../types/RegisterFormType";

//TODO: niezapisywane w bazie name oraz terms !
// export const register = async (name: string, username: string, password: string, terms: boolean) => {
//     const data = {
//         email: username,
//         password: password
//     };
//
//     const response = await fetch(`${API_URL}/user`, {
//         method: 'POST',
//         headers: {
//             ContentType: 'application/json'
//         },
//         body: JSON.stringify(data),
//         credentials: "include"
//     })
//
//     if(response.status !== 201) throw new Error('Registration failed');
//     return await response.text();
//
// }

export const register = async (data: RegisterFormType) => {
    return ky.post(`${API_URL}/user`, {json: data, credentials: "include"}).json<RegisterFormType>()
}

