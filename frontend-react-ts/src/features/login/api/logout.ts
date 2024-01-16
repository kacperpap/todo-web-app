import ky from "ky";
import {API_URL} from "../../../config";

export const logout = async () => {
    ky.post(`${API_URL}/auth/logout`, {credentials: "include"})
}