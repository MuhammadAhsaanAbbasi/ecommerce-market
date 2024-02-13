import React from 'react'
import { client } from '../../../sanity/lib/client'
import Link from 'next/link'
import CategoryCard from './CategoryCard/categoryCard'

const Categories = async () => {
    const data:ICategory[] = await client.fetch(`*[_type == "category" ]{
        _id,
        name,
        "CategoryImage" : categoryImage.asset->url,
    }`)
    return (
        <section className={"flex flex-col gap-10 my-5"}>
            {/* classes.container */}
            <div className={"flex justify-between items-center"}>
            {/* classes.titleWrapper */}
                <h3 className="text-xl font-medium">Shop by Categories</h3>
                <Link href="/products" className='text-xl'>Show All</Link>
            </div>
            <div className={"grid gap-8 p-0 grid-cols-1 md:grid-cols-3"}>
                {data.map(category => {
                    return <CategoryCard key={category._id} category={category} />
                })}
            </div>
        </section>
    )
}

export default Categories