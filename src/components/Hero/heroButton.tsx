"use client"
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { useFilter } from '../Filter/filter'
import { useRouter } from 'next/navigation'

const HeroButton = () => {
    const router = useRouter()
    const {setCategoryFilter} = useFilter()
    const mobileCategory = "97d9a8bd-434b-45d7-845f-445930c37962"
    const setCategory = () => {
        setCategoryFilter([mobileCategory])
        router.push('/products')
    }
    return <Button onClick={()=>setCategory()} className='w-28'>Explore Now</Button>
}

export default HeroButton