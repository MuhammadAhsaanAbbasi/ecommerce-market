"use client"
import { useFilter } from '@/components/Filter/filter'
import { getCategory } from '@/components/GetData/getCategory'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const CategoryCard = () => {
    const [data, setData] = useState<ICategory[]>([])
    
    useEffect(()=>{
        const fetchData = async () => {
            const fdata = await getCategory()
            setData(fdata)
        }
        fetchData()
    },[ data])
    const router = useRouter()
    const {setCategoryFilter} = useFilter()
    return (
        <div className="grid gap-8 p-0 grid-cols-1 md:grid-cols-3">
            {data.map(category => ( 
            <Button
                key={category._id}
                className='relative bg-gray-50 min-h-[360px] w-full flex items-end justify-center p-5 cursor-pointer rounded-lg bg-cover bg-center bg-no-repeat transition-all ease-in-out duration-500'
                style={{backgroundImage: `url(${category.CategoryImage})`}}
                onClick={() => {
                    setCategoryFilter([category._id]);
                    router.push('/products');
                }}
                >
                <p className='bg-white p-4 rounded-lg w-full text-center text-black'>{category.name}</p>
                </Button>
            ))}
        </div>
    )
}

export default CategoryCard