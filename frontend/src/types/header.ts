import { ImageProps } from "./image"

export interface HeaderProps {
    data: {
        logo: {
            id: number,
            url: string,
            name: string,
            logoImage: ImageProps,
        },
        headerLinks: [
            {
                id: number,
                url: string,
                name: string,
                isExternal: boolean,
            },
        ],
        cta: {
            id: number,
            url: string,
            name: string,
            isExternal: boolean,
        },
    }
}