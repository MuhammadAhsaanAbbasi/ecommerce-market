import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {HeaderNav} from '../HeaderNav/headerNav'


const HeaderComponent = () => {
    return (
        <nav className="flex justify-between items-center py-4 bg-white">  
                <Link href="/">
                    <Image src="/assets/logo-black.png" alt="logo" width={170} height={50} />
                </Link>
                <HeaderNav />
        </nav>
        )
}

export default HeaderComponent