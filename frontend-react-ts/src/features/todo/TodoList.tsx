import {Accordion, AccordionControlProps, ActionIcon, Center, SimpleGrid} from "@mantine/core";
import {TodoType} from "../../types/TodoType";
import {TodoListItem} from "./TodoListItem";
import {useEffect, useState} from "react";
import {listTodo} from "./api/todo";
import {IconDots} from "@tabler/icons-react";


function AccordionControl(props: AccordionControlProps) {
    return (
        <Center>
            <Accordion.Control {...props} />
            <ActionIcon size="lg" variant="subtle" color="gray">
                <IconDots size="1rem" />
            </ActionIcon>
        </Center>
    );
}

export const TodoList = () => {
    const [data, setData] = useState<TodoType[]>([]);

    useEffect(() => {
        listTodo().then((response) => setData(response))}, [])


    return (
        <Accordion variant="separated" radius="md" chevronPosition="left" maw={800} mx="auto">
            {data.map((item) => <TodoListItem key={item.id} item={item}/>)}
        </Accordion>
    )
}