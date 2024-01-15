import {notifications} from "@mantine/notifications";

export const creationSuccessNotification = () => {
    notifications.show({
        color: 'green',
        title: 'Creation succeeded',
        message: 'Hey there 👻, your group has been added, you can now add your tasks to list 📕 📗 📘 📙',
    })
}

export const creationFailedNotification = () => {
    notifications.show({
        color: 'red',
        title: 'Creation failed',
        message: 'Hey there, your group name must be at least 3 characters long 🐇'
    })
}

export const deletionSuccessNotification = () => {
    notifications.show({
        color: 'green',
        title: 'Deleted successfully',
        message: 'Hey there 👻, group has been deleted successfully',
    })
}

export const deletionFailedNotification = () => {
    notifications.show({
        color: 'red',
        title: 'Deletion failed',
        message: 'Hey there, something gone wrong 🐇'
    })
}
