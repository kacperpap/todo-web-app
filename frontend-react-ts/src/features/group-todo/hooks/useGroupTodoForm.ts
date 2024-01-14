import {useForm} from "@mantine/form";
import {GroupTodoFormValues} from "../../../types/GroupTodoFormValues";

export const useGroupTodoForm = () => {
    const form = useForm<GroupTodoFormValues>({
        initialValues: {
            name: '',
        },

        validate: {
            name: value => {
                if (value.length < 3) {
                    return "Title must be at least 3 characters long"
                }
            },
        }
    });

    return form
}