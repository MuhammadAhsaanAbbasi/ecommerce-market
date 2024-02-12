import React from 'react'
import { client } from '../../../sanity/lib/client'
import { footer } from '../../../sanity/schema/footer'

const Hero = async () => {
    const data = await client.fetch(`*[_type == "footer" ]{
        _id,
        headerTitle,
        headerDescription,
        "HeroImage" : headerimage.asset->url,
    }`)
    return (
        <section className={"relative overflow-hidden flex justify-center sm:m-0"}>
            {data.map((footer: IFooter) => (
                <div key={footer._id}
                    className={"w-full h-[554px] bg-gray-50 bg-hero flex items-center bg-cover bg-revert bg-no-repeat sm:bg-cover sm:bg-center"} style={{ backgroundImage: `url(${footer.HeroImage})` }}>
                    <div className='flex flex-col justify-center gap-4 md:p-5 w-full sm:p-[10%,30px] p-[50px,30px]'>
                        <h1 className="md:text-[70px] md:m-[32px,0] sm:text-5xl sm:m-[24px,0px] md:whitespace-normal w-[70%] text-4xl m-[8px,0px]">{footer.headerTitle}</h1>
                        <p className="text-2xl md:text-3xl sm:text-lg">{footer.headerDescription}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Hero
