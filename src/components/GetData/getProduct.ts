"use server"
import { client } from '../../../sanity/lib/client'
import { groq } from 'next-sanity'

const getProduct = async (slug:string) => {
    const query = groq`*[_type=="product" && slug.current == $slug][0] 
    {
        "MainImage" : image.asset->url,
        "Slug": slug.current,
        price,
        name,
        _id,
        description,
        category
    } `
    const data:IProduct = await client.fetch(query, { slug },{ next: { revalidate: 30 } })
    return data
}

export default getProduct