import {SimpleGrid} from "@mantine/core";
import {TodoType} from "../../types/TodoType";
import {TodoListItem} from "./TodoListItem";

const data: TodoType[] = [
    {
        id: 1,
        title: 'Zrobić zakupy',
        content: 'Coś tam coś tam',
        done: false
    },
    {
        id: 2,
        title: 'Kupić książkę',
        content: 'Tytuł ksiązki: autor:',
        done: false
    },
    {
        id: 3,
        title: 'Pranie',
        content: 'Zrobic pranie',
        done: true
    },
    {
        id: 4,
        title: 'Zaliczyć przedmiot',
        content: 'Zaliczyć inzynierie internetu',
        done: false
    }
]

export const TodoList = () => {
    return (
        <div style={{width: '100%'}}>
            <SimpleGrid cols={{base: 1, sm: 2, lg: 3}}>
                {data.map((item) => <TodoListItem key={item.id} item={item}/>)}
            </SimpleGrid>
        </div>
    )
}