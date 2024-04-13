'use client'


import { sidebarLinks } from "@/internalLinks";
import Link from "next/link";
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";
import {SignedIn, SignOutButton, useAuth} from "@clerk/nextjs";

export default function LSbar() {


    const router = useRouter()
    const pathName = usePathname()
    const {userId} = useAuth()

    return (
        <section className='custom-scrollbar leftsidebar'>
            <div className='flex w-full flex-1 flex-col gap-6 px-6' >

                {
                    sidebarLinks.map((x) => {

                        const isActive = (pathName.includes(x.route) && x.route.length > 1) || pathName == x.route

                        if(x.route === '/profile'){
                            x.route = `${x.route}/${userId}`
                        }

                        return (
                            <Link href={x.route}
                                  key={x.label}
                                  className={`leftsidebar_link ${isActive && 'bg-primary-500'}`}>

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

            <div className='mt-10 px-6'>

                <SignedIn>
                    <SignOutButton signOutCallback={() => {
                        router.push('/auth/signin')
                    }}>
                        <div className = 'flex cursor-pointer rounded px-2.5 py-2 bg-red-500' >

                            <Image src={'/assets/logout.svg'}
                                   alt={'logout'}
                                   width={30} height={30} />
                            <p className='text-light-1 max-lg:hidden'>
                                Logout
                            </p>

                        </div>
                    </SignOutButton>
                </SignedIn>

            </div>
        </section>
    )
}