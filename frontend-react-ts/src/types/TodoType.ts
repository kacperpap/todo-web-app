import {CategoryType} from "./CategoryType";

export type TodoType = {
    id: number,
    title: string,
    content: string,
    done: boolean,
    categories: CategoryType[];
}