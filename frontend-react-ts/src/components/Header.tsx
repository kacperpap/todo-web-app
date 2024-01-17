import React from 'react';
import {ActionIcon, Menu, MenuItem, NavLink, rem} from '@mantine/core';
import {useNavigate} from "react-router-dom";
import {IconHome, IconLogout, IconSettings, IconUserCircle} from "@tabler/icons-react";
import {useMediaQuery} from "@mantine/hooks";
import {logout} from "../features/login/api/logout";
import {logoutErrorNotifications} from "../features/login/notifications";

export const Header = () => {
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery("(max-width: 768px)");

    const handleProfileSettings = () => {
        navigate('/profile');
    }

    const handleLogout = async () => {
        try{
            await logout();
            window.location.reload();
        } catch (error){
            logoutErrorNotifications();
        }
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            height: '100%'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0',
                margin: '0',
                maxWidth: isSmallScreen ? 'calc(50vw - 50px)' : '59.2vh',
                marginLeft: isSmallScreen ? '50%' : '0',
                marginRight: isSmallScreen ? '40%' : '0'
            }}>
                <img src="/images/OIG_5_50.jpg" alt="Lorro todos" style={{borderRadius: '50%', margin: '1%'}}/>
                <h2 style={{margin: '0', marginLeft: '5%'}}>Ｌｏｒｒｏ ｔｏｄｏｓ</h2>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'absolute',
                left: '45%',
                transform: 'translateX(-45%)',
                marginLeft: '10%'
            }}>
                {!isSmallScreen && <NavLink onClick={() => navigate('/group-todo')} label="Home"
                                            leftSection={<IconHome size="1rem" stroke={1.5}/>}/>}
                {!isSmallScreen && <NavLink onClick={() => navigate('/profile')} label="Profil"
                                            leftSection={<IconUserCircle size="1rem" stroke={1.5}/>}/>}
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'absolute',
                left: '90%',
                transform: 'translateX(-90%)',
                marginLeft: '5%',
                marginRight: '5%'
            }}>
                <div>
                    <Menu
                        shadow="md"
                        withArrow
                    >
                        <Menu.Target>
                            <ActionIcon radius="xl"
                                        onClick={(event) => event.stopPropagation()}
                                        style={{
                                            color: "var(--mantine-color-gray-6)",
                                            backgroundColor: 'transparent',
                                            marginLeft: isSmallScreen ? '20%' : '0',
                                            marginRight: isSmallScreen ? '10%' : '0'}}>
                                <IconUserCircle size={30}/>
                            </ActionIcon>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <MenuItem
                                onClick={handleProfileSettings}
                                leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}
                            >
                                Mój profil
                            </MenuItem>
                            <MenuItem
                                color='red'
                                onClick={handleLogout}
                                leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />}
                            >
                                Logout</MenuItem>
                        </Menu.Dropdown>
                    </Menu>
                </div>
            </div>
        </div>
    );
};


