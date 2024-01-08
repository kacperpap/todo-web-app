import {notifications} from "@mantine/notifications";

export const loginErrorNotifications = () => {
    notifications.show({
        color: 'red',
        title: 'Login failed',
        message: 'Hey there, try again, you passed wrong data! 🤥',
    })
}
//TODO: email jest juz zajety !!!!!!
export const registerErrorNotifications = () => {
    notifications.show({
        color: 'red',
        title: 'Register failed',
        message: 'Hey there 🦜, try again, remember to fill all blank fields! 😉',
    })
}