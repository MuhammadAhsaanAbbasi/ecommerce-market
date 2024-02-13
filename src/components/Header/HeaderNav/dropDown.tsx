import React from 'react'
import Link from "next/link"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu,ShoppingBag, ShoppingCart, UserRound } from "lucide-react"
import { LuHome } from "react-icons/lu";

const DropDown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger><Menu /></DropdownMenuTrigger>
            <DropdownMenuContent className='mx-5 my-2 px-4 py-2'>
                <Link href="/" legacyBehavior passHref>
                    <DropdownMenuItem className='group flex gap-x-2 h-10 w-max items-center justify-center rounded-md bg-background px-3 py-2 text-lg font-medium transition-all duration-500 ease-in-out hover:bg-slate-200 hover:text-accent-foreground focus:bg-slate-200 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'>
                        Home
                        <LuHome size={20} />
                    </DropdownMenuItem>
                </Link>
                <Link href="/products" legacyBehavior passHref>
                <DropdownMenuItem className='group flex gap-x-2 h-10 w-max items-center justify-center rounded-md bg-background px-3 py-2 text-lg font-medium transition-all duration-500 ease-in-out hover:bg-slate-200 hover:text-accent-foreground focus:bg-slate-200 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'>
                    Products
                    <ShoppingBag size={20} />
                    </DropdownMenuItem>
                </Link>
                <Link href="/cart" legacyBehavior passHref>
                <DropdownMenuItem className='group flex gap-x-2 h-10 w-max items-center justify-center rounded-md bg-background px-3 py-2 text-lg font-medium transition-all duration-500 ease-in-out hover:bg-slate-200 hover:text-accent-foreground focus:bg-slate-200 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'>
                    Cart 
                    <ShoppingCart size={20} />
                    </DropdownMenuItem>
                </Link>
                <Link href="/profile" legacyBehavior passHref>
                <DropdownMenuItem className='group flex gap-x-2 h-10 w-max items-center justify-center rounded-md bg-background px-3 py-2 text-lg font-medium transition-all duration-500 ease-in-out hover:bg-slate-200 hover:text-accent-foreground focus:bg-slate-200 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'>
                    Profile
                    <UserRound size={20} />
                    </DropdownMenuItem>
                </Link>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropDown


