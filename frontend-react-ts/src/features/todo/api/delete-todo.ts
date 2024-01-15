import ky from "ky";
import {API_URL} from "../../../config";

export const deleteTodo = (groupId: string, todoId: string) => {
    return ky.delete(`${API_URL}/todo/${groupId}/${todoId}`, {credentials: "include"});
}