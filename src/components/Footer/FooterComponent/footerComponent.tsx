import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { inclusions, navItems } from '@/components/Data/data'

const FooterComponent = () => {
    return (
        <footer className={''}>
                <ul className={"grid justify-center gap-10 p-0 my-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(4,1fr)] md:my-14 mx-4 md:mx-6"}>
                    {inclusions.map(inclusion => (
                        <li key={inclusion.title}>
                            <Image
                                src={inclusion.icon}
                                alt={inclusion.title}
                                width={36}
                                height={36}
                                className="mb-4"
                            />

                            <h5 className=''>{inclusion.title}</h5>
                            <p>{inclusion.description}</p>
                        </li>
                    ))}
                </ul>

            <div className={"p-8 text-white bg-black"}>
                    <div className={"flex justify-between items-center flex-wrap gap-4 md:flex-col md:items-center md:justify-center md:text-center md:mt-8"}>
                        <Link href="/">
                            <Image src="./assets/logo-white.svg" alt="logo" width={170} height={50} />
                        </Link>

                        <p>{"@2024 Tech Heaven All rights Reserved"}</p>

                        <div className={"flex gap-5"}>
                            {navItems.map(item => {
                                const icon = item?.link?.icon
                                return (
                                    <Link
                                        key={item.link.label}
                                        href={item.link.url}
                                        className={"w-full"}
                                        target="_blank"
                                    >
                                        <Image
                                            src={icon?.url}
                                            alt={item.link.label}
                                            width={24}
                                            height={24}
                                            className={'cursor-pointer w-6 h-6 md:w-8 md:h-8'}
                                        />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
            </div>
        </footer>
    )
}

export default FooterComponent