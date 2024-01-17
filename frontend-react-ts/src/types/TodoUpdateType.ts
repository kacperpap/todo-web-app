import {CategoryType} from "./CategoryType";

export type TodoUpdateType = {
    id? : number,
    title: string,
    content: string,
    done: boolean,
    categories?: CategoryType[];
}