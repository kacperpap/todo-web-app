import {
    Button,
    Card,
    Checkbox,
    CheckIcon,
    Combobox,
    Fieldset,
    Group,
    Image,
    Input,
    InputBase,
    Textarea,
    TextInput,
    useCombobox
} from "@mantine/core";
import {useTodoForm} from "./hooks/useTodoForm";
import {TodoFormValues} from "../../types/TodoFormValues";
import {createTodo} from "./api/create-todo";
import {IconSend} from "@tabler/icons-react";
import {useEffect, useState} from "react";
import {listGroupTodo} from "../group-todo/api/group-todo";
import {GroupTodoType} from "../../types/GroupTodoType";
import {creationFailedNotification, creationSuccessNotification} from "./notifications";

export const TodoForm = () => {
    const form = useTodoForm();

    const [groups, setGroups] = useState<GroupTodoType[]>([]);
    const [value, setValue] = useState<string | null>(null);
    const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null);
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
        onDropdownOpen: (eventSource) => {
            if (eventSource === 'keyboard') {
                combobox.selectActiveOption();
            } else {
                combobox.updateSelectedOptionIndex('active');
            }
        },
    });

    useEffect(() => {
        listGroupTodo().then(setGroups);
    }, []);

    const handleSubmit = async (values: TodoFormValues) => {
        try {
            if(value) {
                await createTodo(values, value);
                form.reset();
                setValue(null);
                creationSuccessNotification();
            }
            else
                creationFailedNotification();
        } catch (error){
            creationFailedNotification();
        }
    }

    const options = groups.map((item) => (
        <Combobox.Option value={item.id.toString()} key={item.name} active={item.name === value}>
            <Group gap="xs">
                {item.name === value && <CheckIcon size={12} />}
                <span>{item.name}</span>
            </Group>
        </Combobox.Option>
    ));

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
                    <Fieldset legend="Todo information" variant="filled"
                              style={{marginTop: '25px', marginBottom: '25px'}}>
                        <Combobox
                            store={combobox}
                            resetSelectionOnOptionHover
                            onOptionSubmit={(val) => {
                                setValue(val);
                                combobox.updateSelectedOptionIndex('active');
                                combobox.closeDropdown();
                            }}
                        >
                            <Combobox.Target targetType="button">
                                <InputBase
                                    component="button"
                                    type="button"
                                    pointer
                                    rightSection={<Combobox.Chevron />}
                                    rightSectionPointerEvents="none"
                                    onClick={() => combobox.toggleDropdown()}
                                >
                                    {value || <Input.Placeholder>Pick value</Input.Placeholder>}
                                </InputBase>
                            </Combobox.Target>

                            <Combobox.Dropdown>
                                {groups.length > 0 ? (
                                    <Combobox.Options>{options}</Combobox.Options>
                                ) : (
                                    <Combobox.Option value='' disabled>Brak grup do wybrania</Combobox.Option>
                                )}
                            </Combobox.Dropdown>
                        </Combobox>
                        <TextInput label="Tytuł" withAsterisk placeholder="Tytuł todo" {...form.getInputProps('title')}/>
                        <Textarea
                            radius="md"
                            label="Opis"
                            withAsterisk
                            placeholder="Opis todo"
                            {...form.getInputProps('content')}
                        />
                        <Checkbox
                            defaultChecked
                            label="Set as done"
                            color="green"
                            {...form.getInputProps('done', {type: "checkbox"})}
                            style={{marginTop: '3%'}}
                        />
                        <Group justify="flex-start" style={{marginTop: '1em', marginLeft: '85%'}}>
                            <Button
                                rightSection={<IconSend size={14}/>} type="submit">Add</Button>
                        </Group>
                    </Fieldset>
                </form>
            </Card>
        </div>
    );
};
