import React from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../../../sanity/lib/client";

const FooterComponent = async () => {
    const data: IFooter[] = await client.fetch(`*[_type == "footer" ]{
        inclusions[]{
        "InclusionIcon" : inclusionicon.asset->url,
        title,
        description,
        _key,
        },
        _id,
        footerLine,
        "FooterImage" : footerimage.asset->url,
            navItems[]{
        "NavItemLabel": link.label,
        "NavItemUrl": link.url,
        "NavItemIcon": link.navicon.asset->url,
        _key,
        }
    }
        `);
    return (
        <footer className={""}>
            {data.map((inclusion) => (
                <div key={inclusion._id}>
                    <ul className="grid justify-center gap-10 p-0 my-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(4,1fr)] md:my-14 mx-4 md:mx-6">
                        {inclusion.inclusions.map((item) => (
                            <li key={item.title}>
                                <Image
                                    src={item.InclusionIcon}
                                    alt={item.title}
                                    width={36}
                                    height={36}
                                    className={"mb-4"}
                                />

                                <h5 className={""}>{item.title}</h5>
                                <p>{item.description}</p>
                            </li>
                        ))}
                    </ul>
                    <div className={"p-8 text-white bg-black"}>
                        <div
                            className={
                                "flex justify-between items-center flex-wrap gap-4 md:flex-col md:items-center md:justify-center md:text-center md:mt-8"
                            }
                        >
                            <Link href="/">
                                <Image
                                    src={inclusion.FooterImage}
                                    alt="logo"
                                    width={170}
                                    height={50}
                                />
                            </Link>

                            <p>{inclusion.footerLine}</p>

                            <div className={"flex gap-5"}>
                                {inclusion.navItems.map((item) => {
                                    return (
                                        <Link
                                            key={item._key}
                                            href={item.NavItemUrl}
                                            className={"w-full"}
                                            target="_blank"
                                        >
                                            <Image
                                                src={item.NavItemIcon}
                                                alt={item.NavItemLabel}
                                                width={24}
                                                height={24}
                                                className={"cursor-pointer w-6 h-6 md:w-8 md:h-8"}
                                            />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </footer>
    );
};

export default FooterComponent;
