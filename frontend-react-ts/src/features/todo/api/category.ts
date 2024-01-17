import ky from "ky";
import {API_URL} from "../../../config";
import {CategoryType} from "../../../types/CategoryType";

export const listCategories = async () => {
    return ky.get(`${API_URL}/category`, {credentials: 'include'}).json<CategoryType[]>();
}