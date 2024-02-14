import React from 'react'

interface IParmas {
    params: {
        slug: string
    }
}


const ProductDetailsPage = ({params:{slug}}:IParmas) => {
    return (
        <div>ProductDetailsPage {slug} </div>
    )
}

export default ProductDetailsPage