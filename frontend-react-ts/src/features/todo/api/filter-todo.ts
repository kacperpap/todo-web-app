import ky from "ky";
import {API_URL} from "../../../config";
import {TodoType} from "../../../types/TodoType";

export const listFilteredTodo = async (id: string, sortBy?: string, sortOrder?: string, isDone?: boolean) => {
    let url = `${API_URL}/todo/${id}`;

    const params = new URLSearchParams();

    if (sortBy) params.append('sortBy', sortBy);
    if (sortOrder) params.append('sortOrder', sortOrder);
    if (isDone !== undefined) params.append('isDone', String(isDone));

    url = url + '?' + params.toString();

    return ky.get(url, {credentials: 'include'}).json<TodoType[]>();
};
