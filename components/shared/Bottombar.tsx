'use client'

import {sidebarLinks} from "@/internalLinks";
import Link from "next/link";
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";

export default function Bottombar() {

    const router = useRouter()
    const pathName = usePathname()

    return (
        <section className='bottombar'>
            <div className='bottombar_container'>

                {
                    sidebarLinks.map((x) => {

                        const isActive = (pathName.includes(x.route) && x.route.length > 1) || pathName == x.route

                        return (
                            <Link href={x.route}
                                  key={x.label}
                                  className={`bottombar_link ${isActive && 'bg-primary-500'}`}>

                                <Image src={x.imgURL}
                                       alt={x.label}
                                       width={24} height={24}/>

                                <p className='text-light-1 max-lg:hidden'>
                                    {x.label}
                                </p>
                            </Link>
                        )
                    })
                }

            </div>

        </section>
    )
}