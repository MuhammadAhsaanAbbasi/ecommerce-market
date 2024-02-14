import { client } from "../../../sanity/lib/client"

export const getCategory = async () => {
    const data:ICategory[] = await client.fetch(`*[_type == "category" ]{
        _id,
        name,
        "CategoryImage" : categoryImage.asset->url,
    }`)
    return data
}