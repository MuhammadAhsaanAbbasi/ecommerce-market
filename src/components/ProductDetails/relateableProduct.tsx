import React from 'react'
import { client } from '../../../sanity/lib/client'
import Link from 'next/link'
import Image from 'next/image'
import { groq } from 'next-sanity'

const RelateableProduct = async ({id}:{id:string}) => {
    const query = groq`*[_type == "product" && category._ref == "${id}"] {
            name,
            _id,
            slug,
            "MainImage" : image.asset->url,
            description,
            price,
        }`
    const data:IProduct[] = await client.fetch(query, { id },{ next: { revalidate: 30 } })
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5 my-5'>
        {data.map((product) => (
            <Link
                key={product._id}
                href={`/products/${product.Slug}`} className={"rounded h-full flex flex-col"}>
                <div className={"relative block min-h-[262px] bg-gray-50"}>
                    {!product.MainImage && <div className={"w-full h-full flex items-center justify-center bg-[rgb(#f0f0f0)]"}>No image</div>}
                    {/* classes.image */}
                    {product.MainImage && <Image
                        src={product.MainImage}
                        alt={product.name}
                        width={500}
                        height={500}
                        className="p-6 object-contain aspect-[1/1] max-w-full" />
                    }
                </div>
                <div className={"flex flex-col gap-1 bg-white w-full sm:p-[8px,0] p-1"}>
                    <h2 className={"m-0 text-2xl font-bold whitespace-nowrap overflow-hidden text-ellipsis"}>{product.name}</h2>
                    <div className={"flex flex-col gap-2"}>
                        {product.description && <p className={"m-0 leading-6 text-ellipsis line-clamp-3"}>{product.description}</p>}
                        <div>
                            <p className={"font-bold flex flex-col text-xl leading-4"}>${product.price}</p>
                        </div>
                    </div>
                </div>
            </Link>
        ))}
    </section>
    )
}

export default RelateableProduct