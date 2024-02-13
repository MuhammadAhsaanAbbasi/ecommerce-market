"use client"
import { useFilter } from '@/components/Filter/filter'
import Link from 'next/link'
import React from 'react'

const CategoryCard = ({category}:{category:ICategory}) => {
    const {setCategoryFilter} = useFilter()
    return (
        <Link
        className='relative bg-gray-50 min-h-[360px] w-full flex items-end justify-center p-5 cursor-pointer rounded-lg bg-cover bg-center bg-no-repeat'
        style={{backgroundImage: `url(${category.CategoryImage})`}}
        href={"/products"}
        onClick={() => setCategoryFilter([category._id])}
        >
        <p className='bg-white p-4 rounded-lg w-full text-center'>{category.name}</p>
        </Link>
    )
}

export default CategoryCard