import {FC, memo} from "react";
import {TodoType} from "../../types/TodoType"
import {Badge, Card, Image, Group, Text} from "@mantine/core";

interface TodoListItemProps {
    item: TodoType
}

export const TodoListItem: FC<TodoListItemProps> = memo(({item}) => {

    const style: { border: string; borderColor: string } | undefined = item.done ? {
        border: "1px solid",
        borderColor: "rgba(194,0,0,0.72)"
    } : undefined

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder style={style}>
            <Card.Section>
                <Image
                    src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                    height={160}
                    alt="Norway"
                />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}> {item.title}</Text>
                <Badge color="pink" variant="light"/>
            </Group>

            <Text size="sm" c="dimmed">
                {item.content}
            </Text>
        </Card>
    )
});