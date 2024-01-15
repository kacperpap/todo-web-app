import ky from "ky";
import {API_URL} from "../../../config";
import {TodoType} from "../../../types/TodoType";

export const listTodo = async (id: string) => {
    return ky.get(`${API_URL}/todo/${id}`, {credentials: 'include'}).json<TodoType[]>();
}