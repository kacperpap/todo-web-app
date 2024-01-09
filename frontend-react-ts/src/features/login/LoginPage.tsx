import {useForm} from "@mantine/form";
import {login} from "./api/login";
import {useNavigate} from "react-router-dom";
import {
    loginErrorNotifications,
    registerEmailErrorNotifications,
    registerErrorNotifications,
    registerSuccessNotifications
} from "./notifications";

import {upperFirst, useToggle} from '@mantine/hooks';
import {
    Anchor,
    Button,
    Checkbox,
    Divider,
    Group,
    Paper,
    PaperProps,
    PasswordInput,
    Stack,
    Text,
    TextInput,
} from '@mantine/core';
import {GoogleButton} from './GoogleButton';
import {register} from "./api/register";
import {LoginFormType} from "../../types/LoginFormType";
import {RegisterFormType} from "../../types/RegisterFormType";
import {HTTPError} from "ky";



export function LoginPage(props: PaperProps) {

    const navigate = useNavigate();

    const [type, toggle] = useToggle(['login', 'register']);
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            password: '',
            terms: true
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },
    });

    const handleSubmit = async (data: LoginFormType | RegisterFormType) => {
        try {
            if (type === 'login') {
                await login(data.email, data.password);
                navigate('/todo');
            } else if (type === 'register' && 'name' in data && 'terms' in data) {
                await register(data);
                form.reset();
                navigate('/login');
                toggle();
                registerSuccessNotifications();
            }
        } catch (error) {
            const kyError = error as HTTPError;
            if(type === 'login')
                loginErrorNotifications();
            else if(type === 'register') {
                if(kyError.response.status === 409)
                    registerEmailErrorNotifications();
                else
                    registerErrorNotifications();
            }
        }
    }


    return (
        <Paper radius="md" p="xl" withBorder {...props} style={{maxWidth: '420px', margin: '0 auto', marginTop: '100px' }}>
            <Text size="lg" fw={500}>
                Welcome to Mantine, {type} with
            </Text>

            <Group grow mb="md" mt="md">
                <GoogleButton radius="xl">Google</GoogleButton>
            </Group>

            <Divider label="Or continue with email" labelPosition="center" my="lg" />

            <form onSubmit={form.onSubmit(values => handleSubmit(values))}>
                <Stack>
                    {type === 'register' && (
                        <TextInput
                            label="Name"
                            placeholder="Your name"
                            {...form.getInputProps("name")}
                            radius="md"
                        />
                    )}

                    <TextInput
                        required
                        label="Email"
                        placeholder="hello@mantine.dev"
                        {...form.getInputProps("email")}
                        radius="md"
                    />

                    <PasswordInput
                        required
                        label="Password"
                        placeholder="Your password"
                        {...form.getInputProps("password")}
                        radius="md"
                    />

                    {type === 'register' && (
                        <Checkbox
                            label="I accept terms and conditions"
                            checked={form.values.terms}
                            onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                        />
                    )}

                </Stack>

                <Group justify="space-between" mt="xl">
                    <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
                        {type === 'register'
                            ? 'Already have an account? Login'
                            : "Don't have an account? Register"}
                    </Anchor>
                    <Button type="submit" radius="xl">
                        {upperFirst(type)}
                    </Button>
                </Group>
            </form>
        </Paper>
    );
}