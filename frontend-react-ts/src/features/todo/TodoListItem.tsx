import {FC, memo, useState} from "react";
import {TodoType} from "../../types/TodoType"
import {
    Accordion,
    AccordionControl,
    Badge,
    Button,
    darken,
    defaultVariantColorsResolver,
    Group,
    MantineProvider,
    Menu,
    parseThemeColor,
    rem,
    rgba,
    Text,
    TextInput,
    VariantColorsResolver
} from "@mantine/core";
import {IconCheck, IconEdit, IconTrash, IconX} from "@tabler/icons-react";
import {deleteTodo} from "./api/delete-todo";
import {listTodo} from "./api/todo";
import {
    deletionFailedNotification,
    deletionSuccessNotification,
    updateFailedNotification,
    updateSuccessNotification
} from "./notifications";
import {updateTodo} from "./api/update-todo";
import {TodoUpdateType} from "../../types/TodoUpdateType";

interface TodoListItemProps {
    item: TodoType,
    groupId: string,
    setData: React.Dispatch<React.SetStateAction<TodoType[]>>
}

const variantColorResolver: VariantColorsResolver = (input) => {
    const defaultResolvedColors = defaultVariantColorsResolver(input);
    const parsedColor = parseThemeColor({
        color: input.color || input.theme.primaryColor,
        theme: input.theme,
    });

    if (input.variant === 'filled') {
        return {
            ...defaultResolvedColors,
            color: 'var(--mantine-color-black)',
            hoverColor: 'var(--mantine-color-black)',
        };
    }

    if (input.variant === 'light') {
        return {
            background: rgba(parsedColor.value, 0.1),
            hover: rgba(parsedColor.value, 0.15),
            border: `${rem(1)} solid ${parsedColor.value}`,
            color: darken(parsedColor.value, 0.1),
        };
    }

    if (input.variant === 'danger') {
        return {
            background: 'var(--mantine-color-red-9)',
            hover: 'var(--mantine-color-red-8)',
            color: 'var(--mantine-color-white)',
            border: 'none',
        };
    }

    return defaultResolvedColors;
};

export const TodoListItem: FC<TodoListItemProps> = memo(({item, groupId, setData}) => {
    const [checked, setChecked] = useState(item.done);
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(item.title);
    const [content, setContent] = useState(item.content);
    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = async () => {
        const updatedTodo: TodoUpdateType = {
            content: content,
            title: title,
            done: item.done,
            // categories: item.categories
        }

        try {
            await updateTodo(groupId, item.id.toString(), updatedTodo);
            const updatedData = await listTodo(groupId);
            setData(updatedData);
            updateSuccessNotification();
        } catch (error)
        {
            updateFailedNotification();
        }

        setEditMode(false);
    };

    const handleCancel = () => {
        setTitle(item.title);
        setContent(item.content);
        setEditMode(false);
    };

    const handleCheck = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        setChecked((c) => !c);
        const updatedTodo: TodoUpdateType = {
            content: item.content,
            title: item.title,
            done: !checked,
            // categories: item.categories,
        }

        try {
            await updateTodo(groupId, item.id.toString(), updatedTodo);
            const updatedData = await listTodo(groupId);
            setData(updatedData);
            updateSuccessNotification();
        } catch (error)
        {
            updateFailedNotification();
        }
    };

    const handleDelete = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        try {
            await deleteTodo(groupId, item.id.toString());
            const updatedData = await listTodo(groupId);
            setData(updatedData);
            deletionSuccessNotification();
        } catch (error) {
            deletionFailedNotification();
        }
    };

    const colors = ['#e76d6d', '#498f49', '#4141ce', '#bebe30', '#00FFFF', '#FF00FF'];

    function getBadgeColor(categoryId: number) {
        const index = categoryId % colors.length;
        return colors[index];
    }


    return (
        <MantineProvider theme={{ variantColorResolver }}>
            <Accordion.Item value={item.id.toString()} style={{ marginBottom: '20px' }} >
                <AccordionControl>
                    <Group justify="space-between">
                        {editMode ? (
                            <TextInput
                                value={title}
                                onChange={(event) => setTitle(event.currentTarget.value)}
                            />
                        ) : (
                            <Text>{item.title}</Text>
                        )}
                        <Group justify="space-between">
                            {item.categories && item.categories.map((category) => (
                                <Badge color={getBadgeColor(category.id)} variant="filled" style={{ marginRight: '4px' }}>
                                    {category.name}
                                </Badge>
                            ))}

                            <Badge color={checked ? "lime.4" : "red"} variant="filled" style={{ marginRight: '4px' }}>
                                {checked ? "Done" : "Not Done"}
                            </Badge>
                            <Menu shadow="md" width={400}>
                                <Menu.Target>
                                    <Button onClick={(event) => event.stopPropagation()} style={{ color: checked ? "var(--mantine-color-grape-6)" : "var(--mantine-color-gray-6)", backgroundColor: 'transparent' }}>...</Button>
                                </Menu.Target>
                                <Menu.Dropdown>
                                    <Menu.Item
                                        leftSection={<IconCheck style={{ width: rem(14), height: rem(14) }} />}
                                        onClick={handleCheck}
                                    >
                                        {checked ? "Mark as not done" : "Mark as done"}
                                    </Menu.Item>
                                    <Menu.Item
                                        leftSection={<IconEdit style={{ width: rem(14), height: rem(14) }} />}
                                        onClick={handleEdit}
                                    >
                                        Edit
                                    </Menu.Item>
                                    <Menu.Item
                                        color="red"
                                        leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
                                        onClick={handleDelete}
                                    >
                                        Delete task
                                    </Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                        </Group>
                    </Group>
                </AccordionControl>
                <Accordion.Panel>
                    {editMode ? (
                        <>
                            <TextInput
                                value={content}
                                onChange={(event) => setContent(event.currentTarget.value)}
                                style={{marginBottom: '5%'}}
                            />
                            <div style={{display: 'flex', justifyContent: 'flex-end', gap: '10px'}}>
                                <Button color="green" variant="light" rightSection={<IconCheck size={12}/>}
                                        onClick={handleSave}>Save</Button>
                                <Button color="red" variant="light" rightSection={<IconX size={12}/>}
                                        onClick={handleCancel}>Cancel</Button>
                            </div>

                        </>
                    ) : (
                        item.content
                    )}
                </Accordion.Panel>
            </Accordion.Item>
        </MantineProvider>
    );
});
