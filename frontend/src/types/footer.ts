import { ImageProps } from "./image";

export interface FooterProps {
    data: {
        logo: {
            id: number,
            url: string,
            name: string,
            logoImage: ImageProps,
        },
        address: string,
        workingHours: string,
        contact: string,
        footerLinks: [
            {
                id: number,
                url: string,
                name: string,
                isExternal: boolean,
            },
        ],
    }
};