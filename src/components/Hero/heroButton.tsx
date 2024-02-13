"use client"
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { useFilter } from '../Filter/filter'
const HeroButton = () => {
    const {setCategoryFilter} = useFilter()
    const mobileCategory = "97d9a8bd-434b-45d7-845f-445930c37962"
    return <Link href={"/products"}><Button onClick={()=>setCategoryFilter([mobileCategory])}>Explore Now</Button></Link>
}

export default HeroButton