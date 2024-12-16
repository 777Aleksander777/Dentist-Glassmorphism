"use client";

import { ImageProps } from "@/types/image"
import Image from "next/image"
import { useEffect, useState } from "react";
import { getBackendUrl } from "@/lib/utils";

export function StrapiImage({
    src,
    alt,
    width = 100,
    height = 100,
    isCover = true,
}: Readonly<{src: string, alt: string, width?: number, height?: number, isCover?: boolean}> ) {
    
    // const imageURL = getStrapiMedia(src);
    // if(!imageURL) return null;

    const [url, setURL] = useState<string | null>(null);

    // const src = await getPublicUrl() + imageURL;
    useEffect(() => {
        const fetchImage = async () => {
          // const imageSrc = await getStrapiMedia(src);
          try {
            const imageSrc = await getBackendUrl() + src;

            // console.log("Image SRC: " + imageSrc);
            setURL(imageSrc);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchImage();
      }, [src]);
    
      if (!url) return null // Obsługa ładowania

    return (
        <Image className={`${isCover ? 'object-cover object-center': ''}  min-w-full aspect-auto  min-h-full m-0`} src={url} alt={alt || ""} width={width} height={height}/> 
    )
}