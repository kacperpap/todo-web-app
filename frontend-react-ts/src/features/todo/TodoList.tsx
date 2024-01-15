import {Accordion, Badge, Button, Card, Group, Image, Text} from "@mantine/core";
import {TodoType} from "../../types/TodoType";
import {TodoListItem} from "./TodoListItem";
import {useEffect, useState} from "react";
import {listTodo} from "./api/todo";
import {useNavigate, useParams} from "react-router-dom";


export const TodoList = () => {

    const navigate = useNavigate();
    const [data, setData] = useState<TodoType[]>([]);
    const { id } = useParams<{ id?: string }>();


    useEffect(() => {
        if (id) {
            listTodo(id).then((response) => setData(response));
        }
    }, [id, setData]);

    function handleGoToTodoGroups() {
        navigate("/group-todo");
    }


    if (!id) {
        return (
            <div style={{width: '70%', minWidth: '300px', margin: '0 auto'}}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                            src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9kb3N8ZW58MHx8MHx8fDA%3D"
                            height={430}
                        />
                    </Card.Section>

                    <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500}>Brak zadań do wyświetlenia</Text>
                        <Badge color="pink">None</Badge>
                    </Group>

                    <Text size="sm" c="dimmed">
                        Aby wyświetlić zadania przyporządkowane do danej grupy, skorzystaj z zakładki "Lista grup TODO", po wybraniu wskazanej
                        grupy zostaniesz przeniesiony do tej zakładki, co umożliwi ci modyfikację twoich zadań w ramach danej grupy.
                    </Text>

                    <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={handleGoToTodoGroups}>
                        Check your TODO groups
                    </Button>
                </Card>
            </div>
        );
    }

    return (
        <Accordion variant="separated" radius="md" chevronPosition="left" maw={800} mx="auto" >
            {data.map((item) => <TodoListItem key={item.id} item={item} groupId={id} setData={setData} />)}
        </Accordion>
    )
}