import { ImageProps } from "./image"

export interface HeaderProps {
    data: {
        logo: {
            id: number,
            url: string,
            name: string,
            logoImage: ImageProps,
        },
        menu_links: [
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