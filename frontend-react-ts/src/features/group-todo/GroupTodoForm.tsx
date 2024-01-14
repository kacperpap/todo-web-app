import {GroupTodoFormValues} from "../../types/GroupTodoFormValues";
import {createGroupTodo} from "./api/create-group-todo";
import {useGroupTodoForm} from "./hooks/useGroupTodoForm";
import {Fieldset, TextInput} from "@mantine/core";

export const GroupTodoForm = () => {

    const form = useGroupTodoForm()

    const handleSubmit = async (values: GroupTodoFormValues) => {
        try {
            await createGroupTodo(values);
        } catch (error){
            alert("Cannot add group todo :(");
            //TODO: notify alert !!
        }
    }

    return (
        <Fieldset legend="Personal information" variant="filled">
            <TextInput label="Your name" placeholder="Your name" />
            <TextInput label="Email" placeholder="Email" mt="md" />
        </Fieldset>
    );
}