import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Routing} from "./features/Routing";


// core styles are required for all packages
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import {createTheme, MantineProvider} from "@mantine/core";
import {Notifications} from '@mantine/notifications';

// other css files are required only if
// you are using components from the corresponding package
// import '@mantine/dates/styles.css';
// import '@mantine/dropzone/styles.css';
// import '@mantine/code-highlight/styles.css';
// ...


const theme = createTheme({
    /** Put your mantine theme override here */
});

// defaultColorScheme="dark"
function App() {
    return (
        <MantineProvider theme={theme} >
            <Notifications/>
            <BrowserRouter>
                <Routing/>
            </BrowserRouter>
        </MantineProvider>
    );
}

export default App;
