import ky from "ky";
import {API_URL} from "../../../config";
import {TodoUpdateType} from "../../../types/TodoUpdateType";

export const updateTodo = (groupId: string, todoId: string, data: TodoUpdateType) => {
    return ky.put(`${API_URL}/todo/${groupId}/${todoId}`, {
        credentials: "include",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}