import { ButtonProps } from "./button"
import { ImageProps } from "./image"

export type HeroProps = {
    data: {
        tytul: string,
        opis: string,
        video: ImageProps,
    }
}