import {AppShell, Burger} from "@mantine/core";
import {Outlet} from "react-router-dom";
import {AppNavbar} from "./AppNavbar";
// import {Header} from "./Header"
import React from "react";
import {useDisclosure} from "@mantine/hooks";



export const Layout = () => {

    const [opened, {toggle}] = useDisclosure();

    return (
        <AppShell
            header={{height: 60}}
            navbar={{width: 300, breakpoint: 'sm', collapsed: {mobile: !opened}}}
            padding="md"
        >
            <AppShell.Header>
                <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm"/>
                {/*<Header />*/}
            </AppShell.Header>

            <AppShell.Navbar p="md">
                <AppNavbar/>
            </AppShell.Navbar>

            <AppShell.Main><Outlet/></AppShell.Main>
        </AppShell>
    )
}
