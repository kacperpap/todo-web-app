import {Card, Avatar, Text, Group, Button, Loader} from '@mantine/core';
import {useEffect, useMemo, useState} from "react";
import {UserType} from "../../types/UserType";
import {GroupTodoType} from "../../types/GroupTodoType";
import {TodoType} from "../../types/TodoType";
import {me} from "./api/me";
import {listGroupTodo} from "../group-todo/api/group-todo";
import {listTodo} from "../todo/api/todo";
import {listFilteredTodo} from "../todo/api/filter-todo";
import {useNavigate} from "react-router-dom";

const stats = [
    { value: '34K', label: 'Followers' },
    { value: '187', label: 'Follows' },
    { value: '1.6K', label: 'Posts' },
];

export const ProfilePage = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState<UserType | null>(null);
    const [groupTodos, setGroupTodos] = useState<GroupTodoType[]>([]);
    const [todos, setTodos] = useState<TodoType[]>([]);
    const [doneTodos, setDoneTodos] = useState<TodoType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        me().then((response) => setUser(response));
        listGroupTodo().then((response) => setGroupTodos(response))
    }, []);

    useEffect(() => {
        const fetchTodos = async () => {
            const allTodos: TodoType[] = [];
            for (const groupTodo of groupTodos) {
                const todos = await listTodo(groupTodo.id.toString())
                allTodos.push(...todos);
            }
            setTodos(allTodos);
        };

        if (groupTodos.length > 0) {
            fetchTodos()
        }
    }, [groupTodos]);

    useEffect(() => {
        const fetchDoneTodos = async () => {
            const allDoneTodos: TodoType[] = [];
            for (const groupTodo of groupTodos) {
                const doneTodos = await listFilteredTodo(groupTodo.id.toString(), undefined, undefined, true);
                allDoneTodos.push(...doneTodos);
            }
            setDoneTodos(allDoneTodos);
            setTimeout(() => setLoading(false), 500);
        };

        if (groupTodos.length > 0) {
            fetchDoneTodos()
        }
    }, [groupTodos]);

    const stats = useMemo(() => [
        { value: groupTodos.length, label: 'Grupy' },
        { value: todos.length, label: 'Zadania' },
        { value: doneTodos.length, label: 'Ukończone zadania' },
    ], [groupTodos, todos, doneTodos]);


    const items = loading ? <Loader color="blue" type="bars" /> : stats.map((stat) => (
        <div key={stat.label}>
            <Text ta="center" fz="lg" fw={500}>
                {stat.value}
            </Text>
            <Text ta="center" fz="sm" c="dimmed" lh={1}>
                {stat.label}
            </Text>
        </div>
    ));

    function handleNavigate() {
        navigate('/group-todo')
    }

    return (
        <Card withBorder padding="xl" radius="md" style={{backgroundColor: 'var(--mantine-color-body)'}}>
            <Card.Section
                h={140}
                style={{
                    backgroundImage:
                        'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)',
                }}
            />
            <Avatar
                // src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
                size={80}
                radius={80}
                mx="auto"
                mt={-30}
                style={{border: 'rem(2px) solid var(--mantine-color-body)'}}
            />
            <Text ta="center" fz="lg" fw={500} mt="sm">
                {user ? `Witaj, ${user.name}` : 'Ładowanie...'}
            </Text>
            <Text ta="center" fz="sm" c="dimmed">
                {user ? user.email : 'Ładowanie...'}
            </Text>
            <Group mt="md" justify="center" gap={30}>
                {items}
            </Group>
            <Button onClick={handleNavigate} fullWidth radius="md" mt="xl" size="md" variant="default">
                Sprawdź sowje listy zadań do wykonania
            </Button>
        </Card>
    );
};