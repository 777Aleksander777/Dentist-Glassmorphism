export interface FooterProps {
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