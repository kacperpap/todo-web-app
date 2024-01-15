import {FC, memo} from "react";
import {Button, Card, Group, Image, Menu, rem, Text} from "@mantine/core";
import {GroupTodoType} from "../../types/GroupTodoType";
import {IconCompass, IconTrash} from "@tabler/icons-react";
import {deletionFailedNotification, deletionSuccessNotification} from "./notifications";
import {deleteGroupTodo} from "./api/delete-group-todo";
import {listGroupTodo} from "./api/group-todo";
import {useNavigate} from "react-router-dom";

interface GroupTodoListItemProps {
    item: GroupTodoType,
    onClick: () => void,
    groupId: number,
    setData: React.Dispatch<React.SetStateAction<GroupTodoType[]>>;
}

const imagesSrc = [
    "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWgelHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1704485351547-a0a9893031f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1704391943965-45b4cbc9a931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1702878532399-eca42cc559dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1704911206175-666dc9d9c4cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1704908444101-892ee1daa1b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1687443543514-1038d371e895?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1704467841057-89cba0d410e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1578012773334-10136ae729c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1704642783129-d50efbdfc037?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
];

export const GroupTodoListItem: FC<GroupTodoListItemProps> = memo(({item, onClick, groupId, setData}) => {
    const navigate = useNavigate();
    const imageSrc = imagesSrc[item.id % imagesSrc.length];

    const handleNavigate = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        navigate(`/todo/${groupId}`);
    }

    const handleDelete = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        try {
            await deleteGroupTodo(groupId.toString());
            const updatedData = await listGroupTodo();
            setData(updatedData);
            deletionSuccessNotification();
        } catch (error) {
            deletionFailedNotification();
        }
    };

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder onClick={onClick} style={{ transition: '0.3s', cursor: 'pointer' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(33,33,33,.2)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}>
            <Card.Section>
                <Image
                    src={imageSrc}
                    height={160}
                />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}> {item.name}</Text>
                <Menu shadow="md" width={400}>
                    <Menu.Target>
                        <Button onClick={(event) => event.stopPropagation()} style={{ color: "var(--mantine-color-gray-6)", backgroundColor: 'transparent', fontSize: '20px' }}>...</Button>
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Item
                            leftSection={<IconCompass style={{ width: rem(14), height: rem(14) }} />}
                            onClick={handleNavigate}
                        >
                            Navigate to tasks
                        </Menu.Item>
                        <Menu.Item
                            color="red"
                            leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
                            onClick={handleDelete}
                        >
                            Delete group
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Group>
        </Card>
    )
});