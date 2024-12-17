import { ButtonProps } from "./button"
import { ImageProps } from "./image"
import { ListProps } from "./list"
import { VideoProps } from "./video"

export type AboutOneProps = {
    data: {
        title: string,
        desc: string,
        img: ImageProps,
        button: ButtonProps
    }
}