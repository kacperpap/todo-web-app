import {GroupTodoFormValues} from "../../types/GroupTodoFormValues";
import {createGroupTodo} from "./api/create-group-todo";
import {useGroupTodoForm} from "./hooks/useGroupTodoForm";
import {Button, Card, Fieldset, Group, Image, TextInput} from "@mantine/core";
import {IconArrowRight, IconPhoto, IconSend} from "@tabler/icons-react";
import {useNavigate} from "react-router-dom";
import {creationFailedNotification, creationSuccessNotification} from "./notifications";

export const GroupTodoForm = () => {

    const navigate = useNavigate()
    const form = useGroupTodoForm()

    const handleSubmit = async (values: GroupTodoFormValues) => {
        try {
            await createGroupTodo(values);
            form.reset();
            creationSuccessNotification();
        } catch (error){
            creationFailedNotification()
        }
    }

    const checkExistingGroups = () => {
        navigate('/group-todo');
    }

    return (
        <div style={{width: '70%', minWidth: '300px', margin: '0 auto'}}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <Image
                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                        height={200}
                    />
                </Card.Section>
                <form onSubmit={form.onSubmit(handleSubmit)}>
                    <Fieldset legend="Group information" variant="filled"
                              style={{marginTop: '25px', marginBottom: '25px'}}>
                        <TextInput label="name" withAsterisk placeholder="Name of new group" {...form.getInputProps('name')}/>
                        <Group justify="flex-start" style={{marginTop: '1em', marginLeft: '55%'}}>
                            <Button
                                rightSection={<IconSend size={14}/>} type="submit">Add</Button>
                            <Button
                                variant="light"
                                leftSection={<IconPhoto size={14}/>}
                                rightSection={<IconArrowRight size={14}/>}
                                onClick={checkExistingGroups}
                            >
                                Check existing groups
                            </Button>
                        </Group>
                    </Fieldset>
                </form>
            </Card>
        </div>
);
}