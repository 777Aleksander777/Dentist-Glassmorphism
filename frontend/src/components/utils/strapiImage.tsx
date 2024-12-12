"use client";

import { ImageProps } from "@/types/image"
import Image from "next/image"
import { useEffect, useState } from "react";
import { getBackendUrl } from "@/lib/utils";

export function StrapiImage({
    src,
    alt,
    width,
    height,
}: Readonly<{src: string, alt: string, width: number | null, height: number | null}> ) {
    
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
        <Image className="object-scale-down h-full m-auto" src={url} alt={alt || ""} width={width || undefined} height={height || undefined}/> 
    )
}