import {Image} from "@mantine/core";

export const ErrorPage = () => {
    return (
        <Image
            radius="md"
            style={{
                width: '30%',
                height: '30%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '30%',
                marginRight: '30%'
            }}
            src="/images/404.png"
        />

    )
}