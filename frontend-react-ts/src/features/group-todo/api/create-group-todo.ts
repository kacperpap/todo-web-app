import ky from "ky";
import {API_URL} from "../../../config";
import {GroupTodoFormValues} from "../../../types/GroupTodoFormValues";
import {GroupTodoType} from "../../../types/GroupTodoType";

export const createGroupTodo = async (data: GroupTodoFormValues) => {
    return ky.post(`${API_URL}/group-todo`, {json: data, credentials: "include"}).json<GroupTodoType>()
}