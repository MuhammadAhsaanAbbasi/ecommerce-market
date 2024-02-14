import React from 'react'
import getProduct from '../GetData/getProduct'
import Wrapper from '../Wrapper/wrapper'
import ProductDetailsCard from './productDetailsCard'

const ProductDetail = async ({ slug }: { slug: string }) => {
    const data = await getProduct(slug)
    return (
        <Wrapper>
                <ProductDetailsCard product={data}/>
        </Wrapper>
    )
}

export default ProductDetail