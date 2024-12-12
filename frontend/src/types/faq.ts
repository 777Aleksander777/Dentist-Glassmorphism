import { ListProps } from "./list"

export type FAQProps = {
    data: {
        title: string,
        list: [
            ListProps
        ]
    }
}