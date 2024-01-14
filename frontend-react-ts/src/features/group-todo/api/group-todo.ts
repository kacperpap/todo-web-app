import ky from "ky";
import {API_URL} from "../../../config";
import {GroupTodoType} from "../../../types/GroupTodoType";

export const listGroupTodo = async () => {
    return ky.get(`${API_URL}/group-todo`, {credentials: 'include'}).json<GroupTodoType[]>();
}