import {notifications} from "@mantine/notifications";

export const loginErrorNotifications = () => {
    notifications.show({
        color: 'red',
        title: 'Login failed',
        message: 'Hey there, try again, you passed wrong data! 🤥',
    })
}

export const registerErrorNotifications = () => {
    notifications.show({
        color: 'red',
        title: 'Registration failed',
        message: 'Hey there 🦜, try again, remember to fill all blank fields! 😉',
    })
}

export const registerEmailErrorNotifications = () => {
    notifications.show({
        color: 'red',
        title: 'Email already in use',
        message: 'Hey there 🦜, try again with another email address, (this is already used)! 😉',
    })
}
export const registerSuccessNotifications = () => {
    notifications.show({
        color: 'green',
        title: 'Registration success',
        message: 'Hey there 🦜. Thanks for registering on our platform 🍾\n' +
                 'You can now start to remember about EVERYTHING 📝\n',
    })
}