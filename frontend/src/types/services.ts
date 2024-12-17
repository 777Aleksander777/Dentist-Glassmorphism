import { ImageProps } from "./image"

export type ServicesProps = {
    data: {
        title: string,
        desc: string,
        carts: [
            {
                title: string,
                desc: string,
                img: ImageProps,
            }
        ]
    }
}