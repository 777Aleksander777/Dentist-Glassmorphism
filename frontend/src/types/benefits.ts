import { ButtonProps } from "./button"
import { ImageProps } from "./image"
import { ListProps } from "./list"

export type BenefitsOneProps = {
    data: {
        tytul: string,
        opis: string,
        przycisk: ButtonProps,
        imgs: [
            ImageProps,  
        ],
    }
}