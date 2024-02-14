import Image from 'next/image'
import React from 'react'

const ProductDetailsCard = ({ product }: { product: IProduct }) => {
    return (
        <section className={"grid grid-cols-1 md:grid-cols-2 gap-8 w-full"}>
            <div className={"relative sm:min-h-[400px] bg-gray-50 min-h-52"}>
                {!product.MainImage && <div className={"w-full h-full flex items-center justify-center bg-[rgb(#f0f0f0)]"}>No image</div>}
                {product.MainImage &&
                    <Image
                        src={product.MainImage}
                        alt={product.name}
                        width={500}
                        height={500}
                        className={"p-6 aspect-[1/1] max-w-full"}
                    />}
            </div>
            <div className={"flex flex-col mt-2"}>
                <h1 className={"text-4xl font-semibold"}>{product.name}</h1>

                <div className={"flex justify-start mb-3 mt-2"}>
                    <div className={"text-base"}>
                        {/* {categories?.map((category, index) => {
                        })} */}
                    </div>
                    <p className={"text-green-500 text-base"}> In stock</p>
                </div>

                <div className='my-1'>
                    <p className={"font-bold flex flex-col text-xl"}>${product.price}</p>
                </div>

                <div className={"p-[30px,0] text-lg font-normal"}>
                    <h6>Description</h6>
                    <p>{product.description}</p>
                </div>

                {/* <AddToCartButton product={product} className={classes.addToCartButton} /> */}
            </div>
        </section>
    )
}

export default ProductDetailsCard