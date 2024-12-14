import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function getBackendUrl<String>() {
  return process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:1337"
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export function getPublicUrl(path: string) {
//   const { data } = supabase.storage
//     .from('fruitify')
//     .getPublicUrl(path);

//   return data?.publicUrl;
// };

// export function getImageURL(url:string) {

//   const [imageUrl, setImageUrl] = useState<string | null>(null);

//   useEffect(() => {
//     async function getImageSrc() {
//       try {
//         const imageSrc = await getBackendUrl() + url;
    
//         // console.log("Image SRC: " + imageSrc);
//         setImageUrl(imageSrc)
//         // return(imageSrc);
//       } catch (error) {
//         console.error(error);
//         // return null;
//       }
//     }

//     getImageSrc();
//   }, [])

//   return imageUrl;
// } 