"use client"
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react'
import CarouselImage from './carouselImage';

const PromotionSection = ({ promotion }: { promotion: IPromotion[] }) => {
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    const targetDate = useMemo(() => {
        const date = new Date();
        date.setDate(date.getDate() + 3);
        return date;
    }, []);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            const currentTime = new Date()
            const timeDifference = Math.max(Number(targetDate) - Number(currentTime), 0)

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

            setTime({ days, hours, minutes, seconds })

            if (timeDifference === 0) {
                clearInterval(timerInterval)
                // You can add code here to handle what happens when the target date is reached.
            }
        }, 1000)

        return () => {
            clearInterval(timerInterval) // Cleanup the interval when the component unmounts.
        }
    }, [targetDate])

    return (
        <section className={"flex flex-col justify-center gap-5"}>
            {promotion.map((promo) => (
                <div key={promo._id} className={"grid grid-cols-1 sm:grid-cols-2 gap-20 mb-8"}>
                    <div className={"flex flex-col justify-center gap-8"} >
                        <div className={"flex flex-col gap-4"}>
                            <h3 className={"text-xl font-medium"}>{promo.title}</h3>
                            <p>{promo.description}</p>
                        </div>
                        <ul className={"grid grid-cols-2 lg:grid-cols-4 gap-5"}>
                            <StatBox label="Days" value={time.days} />
                            <StatBox label="Hours" value={time.hours} />
                            <StatBox label="Minutes" value={time.minutes} />
                            <StatBox label="Seconds" value={time.seconds} />
                        </ul>
                    </div>
                    <div>
                        <CarouselImage PromotionImage={promo.PromotionImage}  />
                    </div>
                </div>
            ))}
        </section>
    )
}

const StatBox = ({ label, value }: { label: string; value: number }) => (
    <li className={"w-full min-w-[100px] p-4 border-[1px,solid] border-gray-50 bg-gray-50 rounded-lg text-center"}>
        <h4>{value}</h4>
        <p>{label}</p>
    </li>
)
export default PromotionSection