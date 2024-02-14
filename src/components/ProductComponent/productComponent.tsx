"use client"
import { useFilter } from '@/components/Filter/filter'
import Wrapper from '@/components/Wrapper/wrapper'
import React from 'react'

const ProductComponent = () => {
    const { categoryFilter } = useFilter()
    return (
        <>
            <Wrapper>
                <div>ProductPage {categoryFilter.map(item => item)}</div>
            </Wrapper>
        </>
    )
}

export default ProductComponent