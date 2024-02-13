"use client"
import { useFilter } from '@/components/Filter/filter'
import Link from 'next/link'
import React from 'react'

const NavCategory = ({category}:{category:ICategory}) => {
    const {setCategoryFilter} = useFilter()
    return (
        <li
            className="flex flex-col space-y-1 rounded-md p-4 text-xl font-medium leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
            <Link
            href={`/products`}
            onClick={() => setCategoryFilter([category._id])}
            >
                {category.name}
            </Link>
        </li>
    )
}

export default NavCategory