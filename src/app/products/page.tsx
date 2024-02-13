"use client"
import { useFilter } from '@/components/Filter/filter'
import React from 'react'

const ProductPage = () => {
    const {categoryFilter} = useFilter()
    console.log(categoryFilter)
    return (
        <div>ProductPage {categoryFilter.map(item=>item)}</div>
    )
}

export default ProductPage