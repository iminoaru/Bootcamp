import Link from "next/link";
import Image from "next/image";
import {OrganizationSwitcher, SignedIn, SignOutButton} from "@clerk/nextjs";
import {dark} from "@clerk/themes";

export default function Topbar() {
    return (
        <nav className='topbar'>
            <Link href='/' className='flex items-center gap-4'>
                
                <p className='text-heading3-bold text-light-1 max-xs:hidden'>Bootcamp</p>
            </Link>

            <div className = 'flex items-center gap-1'>
                <div className = 'block md:hidden'>
                    <SignedIn>
                        <SignOutButton>
                            <div className = 'flex cursor-pointer rounded px-2.5 py-2 bg-red-500'>

                                <Image src={'/assets/logout.svg'}
                                       alt={'logout'}
                                       width={30} height={30} />

                            </div>
                        </SignOutButton>
                    </SignedIn>
                </div>

                <OrganizationSwitcher appearance={{
                    baseTheme : dark ,
                    elements : {
                        organizationSwitcherTrigger : "py-2 px-4"
                }
                }}
                />
            </div>
        </nav>
    )
}
