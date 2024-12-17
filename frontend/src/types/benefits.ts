import { ButtonProps } from "./button"
import { ImageProps } from "./image"
import { ListProps } from "./list"

export type BenefitsOneProps = {
    data: {
        title: string,
        desc: string,
        button: ButtonProps,
        imgs: [
            ImageProps,  
        ],
    }
}