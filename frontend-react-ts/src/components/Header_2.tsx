import React from 'react';
import { MantineLogo } from '@mantinex/mantine-logo';
import { Group, Button } from '@mantine/core';

export const Header = () => {
    return (
        <Group justify="space-between" style={{ height: '100%', alignItems: 'center' }}>
            <Group>
                <MantineLogo />
                <span>Mantine</span>
            </Group>

            <Group>
                <Button component="a" href="#">Listy TODO</Button>
                <Button component="a" href="#">Dodaj TODO</Button>
                <Button component="a" href="#">Profil</Button>
                <Button component="a" href="#">Home</Button>
            </Group>

            <Button color="red">Logout</Button>
        </Group>
    );
};

