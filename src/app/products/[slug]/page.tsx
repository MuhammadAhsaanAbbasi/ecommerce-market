import ProductDetail from '@/components/ProductDetails/productDetail'
import React from 'react'

interface IParmas {
    params: {
        slug: string
    }
}

const ProductDetailsPage = ({params:{slug}}:IParmas) => {
    return (
        <>
        <ProductDetail slug={slug}/>
        </>
    )
}

export default ProductDetailsPage

