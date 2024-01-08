import {Button, Checkbox, Group, Paper, Stack, Textarea, TextInput} from "@mantine/core";
import {useTodoForm} from "./hooks/useTodoForm";
import {TodoFormValues} from "../../types/TodoFormValues";
import {createTodo} from "./api/create-todo";
import {useNavigate} from "react-router-dom";

export const TodoForm = () => {
    const navigate = useNavigate()

    const form = useTodoForm()

    const handleSubmit = async (values: TodoFormValues) => {
        try {
            await createTodo(values);
            navigate('/todo');
        } catch (error){
            alert("Cannot add todo :(");
        }
    }

    return (
        <Paper shadow="sm" radius="md" p="xl">
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack
                    h={300}
                    bg="var(--mantine-color-blue-light)"

                >
                    <TextInput
                        radius="md"
                        label="Tytuł"
                        withAsterisk
                        placeholder="Tytuł todo"
                        {...form.getInputProps('title')}
                    />
                    <Textarea
                        radius="md"
                        label="Input label"
                        withAsterisk
                        description="Input description"
                        placeholder="Input placeholder"
                        {...form.getInputProps('content')}
                    />
                    <Checkbox
                        defaultChecked
                        label="I agree to sell my privacy"
                        color="green"
                        {...form.getInputProps('done', {type: "checkbox"})}
                    />

                    <Group justify="flex-end" mt="md">
                        <Button type="submit">Wyślij</Button>
                    </Group>
                </Stack>
            </form>
        </Paper>);
}