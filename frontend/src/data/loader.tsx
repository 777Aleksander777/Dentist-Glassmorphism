import { getBackendUrl } from "@/lib/utils";
import qs from "qs";

const baseUrl = getBackendUrl();

async function fetchData(url: string) {
    const authToken = null;
    const headers = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
        },
    };

    try{
        const res = await fetch(url, authToken ? headers: {});
        const data = await res.json();
        return data;
    } catch(error) {
        console.error("Cannot fetch data: " + error);
        throw error;
    }
}

export async function getGlobalData() {

    const url = new URL("/api/global", baseUrl);

    url.search = qs.stringify({
        populate: {
            header: {
                populate: {
                    logo: {
                        populate: {
                            logoImage: {
                                fields: ["url", "name", "alternativeText", "height", "width"],
                            }
                        }
                    },
                    menu_links: true,
                    cta: true,
                }
            },
            footer: {
                populate: {
                    logo: {
                        populate: {
                            logoImage: {
                                fields: ["url", "name", "alternativeText", "height", "width"],                                
                            }
                        }
                    },
                    footerLinks: true,
                }
            }
        }
    })


    return await fetchData(url.href);
}