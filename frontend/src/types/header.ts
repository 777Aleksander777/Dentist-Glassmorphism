export interface HeaderProps {
    data: {
        logo: {
            id: number,
            url: string,
            name: string,
            logoImage: {
                id: number,
                documentId: string,
                url: string,
                name: string,
                alternativeText: string,
                width: number,
                height: number,
            },
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