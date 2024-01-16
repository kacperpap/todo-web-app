import {AppShell, Burger} from "@mantine/core";
import {Outlet} from "react-router-dom";
import {AppNavbar} from "./AppNavbar";
import React from "react";
import {useDisclosure} from "@mantine/hooks";
import {Header} from "./Header";



export const Layout = () => {

    const [opened, {toggle}] = useDisclosure();

    return (
        <AppShell
            header={{height: 60}}
            navbar={{width: 300, breakpoint: 'sm', collapsed: {mobile: !opened}}}
            padding="md"
        >
            <AppShell.Header>
                <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm"/>
                    {<Header/>}
                </div>
            </AppShell.Header>


            <AppShell.Navbar p="md">
                <AppNavbar/>
            </AppShell.Navbar>

            <AppShell.Main><Outlet/></AppShell.Main>
        </AppShell>
    )
}
