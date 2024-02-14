"use client"
import { useFilter } from '@/components/Filter/filter'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const CategoryCard = ({category}:{category:ICategory}) => {
    const router = useRouter()
    const {setCategoryFilter} = useFilter()
    const setCategory = () => {
        setCategoryFilter([category._id])
        router.push('/products')
        console.log('category', category)
    }
    return (
        <Button
        className='relative bg-gray-50 min-h-[360px] w-full flex items-end justify-center p-5 cursor-pointer rounded-lg bg-cover bg-center bg-no-repeat transition-all ease-in-out duration-500'
        style={{backgroundImage: `url(${category.CategoryImage})`}}
        onClick={() => setCategory()}
        >
        <p className='bg-white p-4 rounded-lg w-full text-center text-black'>{category.name}</p>
        </Button>
    )
}

export default CategoryCard