import React from 'react'
import Wrapper from '../Wrapper/wrapper'
import ProductDetailsCard from './productDetailsCard'
import { client } from '../../../sanity/lib/client'
import { groq } from 'next-sanity'
import RelateableProduct from './relateableProduct'

const ProductDetail = async ({ slug }: { slug: string }) => {
    const query = groq`*[_type=="product" && slug.current == $slug][0] 
    {
        "MainImage" : image.asset->url,
        "Slug": slug.current,
        "CategoryId" : category._ref,
        price,
        name,
        _id,
        description,
    } `
    const data:IProduct = await client.fetch(query, { slug },{ next: { revalidate: 30 } })
    return (
        <Wrapper>
                <ProductDetailsCard product={data}/>
                <RelateableProduct id={data.CategoryId}/>
        </Wrapper>
    )
}

export default ProductDetail