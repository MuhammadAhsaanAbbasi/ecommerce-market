import { client } from "../../../sanity/lib/client"

export const revalidate = 60 * 60

export async function getCategory() {
    const data = await client.fetch(`*[_type == "category" ]{
        _id,
        name,
        "CategoryImage" : categoryImage.asset->url,
    }`)
    return data
}