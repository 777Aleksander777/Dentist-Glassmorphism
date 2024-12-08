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