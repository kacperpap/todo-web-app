import {useForm} from "@mantine/form";
import {TodoFormValues} from "../../../types/TodoFormValues";

export const useTodoForm = () => {
    const form = useForm<TodoFormValues>({
        initialValues: {
            content: '',
            title: '',
            done: false,
            categories: [],
        },

        validate: {
            title: value => {
                if (value.length < 3) {
                    return "Title must be at least 3 characters long"
                }
            },
            content: value => {
                if (value.length < 5) {
                    return "User input must be at least 5 characters long"
                }
            }
        },
    });

    return form
}