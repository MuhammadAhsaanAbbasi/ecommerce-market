import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay"

const CarouselImage = ({ PromotionImage }: { PromotionImage: string[] }) => {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    )
    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full cursor-pointer"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {PromotionImage.map((movie,index) => (
                    <CarouselItem key={index}>
                        <div className="flex-full min-w-0">
                            <Image
                                src={movie}
                                alt={"Promotion Image"}
                                width={900}
                                height={900}
                                className="max-h-[350px] object-center object-cover"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

export default CarouselImage