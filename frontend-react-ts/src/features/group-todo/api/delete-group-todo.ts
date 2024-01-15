import ky from "ky";
import {API_URL} from "../../../config";

export const deleteGroupTodo = async (groupId: string) => {
    return ky.delete(`${API_URL}/group-todo/${groupId}`, {credentials: "include"})
}