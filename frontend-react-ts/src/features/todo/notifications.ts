import {notifications} from "@mantine/notifications";

export const deletionSuccessNotification = () => {
    notifications.show({
        color: 'yellow',
        title: 'Deleted successfully',
        message: 'I hope that task won\'t be needed more ⚰️, cause I deleted it as you wished 🗑'
    })
}

export const deletionFailedNotification = () => {
    notifications.show({
        color: 'red',
        title: 'Deletion failed',
        message: 'Do not know why, but this cannot be removed 🗑'
    })
}

export const updateSuccessNotification = () => {
    notifications.show({
        color: 'green',
        title: 'Updated successfully',
        message: 'You have changed your todo correctly ✒️'
    })
}

export const updateFailedNotification = () => {
    notifications.show({
        color: 'red',
        title: 'Update failed',
        message: 'Hey there, title/ content cannot be empty ✒️'
    })
}

export const creationSuccessNotification = () => {
    notifications.show({
        color: 'green',
        title: 'Created successfully',
        message: 'You have added your todo correctly ✒️'
    })
}

export const creationFailedNotification = () => {
    notifications.show({
        color: 'red',
        title: 'Creation failed',
        message: 'Hey there, you must specify group (and others) ✒️'
    })
}