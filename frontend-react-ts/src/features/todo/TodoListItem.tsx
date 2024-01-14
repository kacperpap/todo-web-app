import {FC, memo, useState} from "react";
import {TodoType} from "../../types/TodoType"
import {
    Badge,
    Card,
    Image,
    Group,
    Text,
    AccordionControl,
    Accordion,
    ColorSwatch,
    CheckIcon,
    rem,
    ActionIcon,
    MantineProvider, rgba, darken, VariantColorsResolver, defaultVariantColorsResolver, parseThemeColor, Menu, Button
} from "@mantine/core";
import {IconCheck, IconTrash} from "@tabler/icons-react";

interface TodoListItemProps {
    item: TodoType
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

export const TodoListItem: FC<TodoListItemProps> = memo(({item}) => {
    const [checked, setChecked] = useState(item.done);

    const handleCheck = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        setChecked((c) => !c);
    };

    const handleDelete = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        // Tutaj dodaj logikę do usuwania zadania
    };

    return (
        <MantineProvider theme={{ variantColorResolver }}>
            <Accordion.Item value={item.id.toString()} style={{ marginBottom: '20px' }}>
                <AccordionControl>
                    <Group justify="space-between">
                        <Text>{item.title}</Text>
                        <Group justify="space-between">
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
                <Accordion.Panel>{item.content}</Accordion.Panel>
            </Accordion.Item>
        </MantineProvider>
    )
});
