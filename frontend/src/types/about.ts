import { ButtonProps } from "./button"
import { ImageProps } from "./image"
import { ListProps } from "./list"
import { VideoProps } from "./video"

export type AboutOneProps = {
    data: {
        tytul: string,
        opis: string,
        img: ImageProps,
        przycisk: ButtonProps
    }
}