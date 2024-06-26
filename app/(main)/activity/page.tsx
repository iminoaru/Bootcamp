import Image from "next/image";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs";

import { fetchUser, getActivity } from "@/lib/actions/user.actions";

async function Page() {
    const user = await currentUser();
    if (!user) return null;

    const userInfo = await fetchUser(user.id)

    const activity = await getActivity(userInfo.id)

    return (
        <>
            <h1 className='head-text'>Activity</h1>

            <section className='mt-10 flex flex-col gap-5'>
                {activity.length > 0 ? (
                    <>

                        {activity.map((activity) => (
                            <Link key={activity.id} href={`/post/${activity.parentId}`}>
                                <article className='activity-card'>
                                    <Image
                                        src={activity.author.avatar}
                                        alt='user_logo'
                                        width={20}
                                        height={20}
                                        className='rounded-full object-cover'
                                    />
                                    <p className='!text-small-regular text-light-1'>
                    <span className='mr-1 text-primary-500'>
                      {activity.author.name}
                    </span>{" "}
                                        replied to your Post
                                    </p>
                                </article>
                            </Link>
                        ))}
                    </>
                ) : (
                    <p className='!text-base-regular text-light-3'>No activities yet</p>
                )}
            </section>
        </>
    );
}

export default Page;