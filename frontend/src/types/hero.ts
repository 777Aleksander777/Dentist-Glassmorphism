import { ButtonProps } from "./button"
import { ImageProps } from "./image"

export type HeroProps = {
    data: {
        title: string,
        desc: string,
        button: ButtonProps,
        img: ImageProps,
        type: 'ONE' | 'TWO',
    }
}