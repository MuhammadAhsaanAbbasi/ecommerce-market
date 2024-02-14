import Wrapper from '@/components/Wrapper/wrapper'
import React from 'react'
import Products from './products'
import Filter from './filter'

const ProductComponents = () => {
    return (
        <Wrapper>
            <section className="grid sm:grid-cols-[1fr,75%] sm:gap-16 gap-12 grid-cols-1">
                <Filter />
                <Products />
            </section>
        </Wrapper>
    )
}

export default ProductComponents