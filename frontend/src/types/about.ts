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

export type AboutTwoProps = {
    data: {
        title: string,
        desc: string,
        img: ImageProps,
        list: [ 
            ListProps 
        ],
    }
}

export type AboutThreeProps = {
    data: {
        titleOne: string,
        descOne: string,
        titleTwo: string,
        descTwo: string,
        img: ImageProps,
        list: [
            ListProps,
        ],
    }
}

export type AboutFourProps = {
    data: {
        title: string,
        desc: string,
        button: ButtonProps,
        list: [
            ListProps,
        ],
        video: VideoProps,
    }
}