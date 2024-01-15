import React from 'react';
import {Avatar, Group, NavLink} from '@mantine/core';
import {useNavigate} from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
            <img src="/images/OIG_5.jpg" alt="Lorro todos" style={{ borderRadius: '50%' }}/>

            <NavLink onClick={() => navigate('/group-todo')} label="Home" />
            <NavLink onClick={() => navigate('/profile')} label="Profil"/>

            <Avatar color="cyan" radius="xl">MK</Avatar>
        </div>
    );

};

