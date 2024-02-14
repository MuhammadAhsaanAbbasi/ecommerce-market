"use client"
import * as React from "react"
import Link from "next/link"
import { ShoppingBag, ShoppingCart, UserRound } from "lucide-react"
import { LuHome } from "react-icons/lu";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import DropDown from "./dropDown";
import { useState,useEffect } from "react";
import { getCategory } from "@/components/GetData/getCategory";
import { useFilter } from "@/components/Filter/filter";

export function HeaderNav() {
    const [data, setData] = useState<ICategory[]>([])
    useEffect(()=>{
        const fetchData = async () => {
            const fdata = await getCategory()
            setData(fdata)
        }
        fetchData()
    },[ data])
    const {setCategoryFilter} = useFilter()
    return (
        <>
            <section className="hidden sm:flex">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Home
                                    <LuHome size={23} />
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                Products
                                <ShoppingBag size={23} />
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="flex flex-col w-full gap-3 p-4 px-14">
                                    {data.map((component) => (
                                        <li
                                        key={component._id}
                                        className="flex flex-col space-y-1 rounded-md p-4 text-xl font-medium leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                        <Link
                                        href={`/products`}
                                        onClick={() => 
                                            setCategoryFilter([component._id])
                                        }
                                        >
                                            {component.name}
                                        </Link>
                                    </li>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/cart" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Cart <ShoppingCart size={23} />
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/profile" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Profile
                                    <UserRound size={23} />
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </section>
            <section className="flex sm:hidden">
                <DropDown />
            </section>
        </>
    )
}