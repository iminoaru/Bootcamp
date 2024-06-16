"use client"

import Link from "next/link"
import React from "react"

import { Fade, Slide } from 'react-awesome-reveal';

export default function Hero() {
    return (
        <>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-950 to-[#1e293b] dark:bg-gradient-to-r dark:from-gray-950 dark:to-[#1e293b]">
                <div className="container px-4 md:px-6 py-5 text-center">
                    <Fade direction="up" triggerOnce>
                    <div className="space-y-5">
                        <br></br> <br></br> <br></br>

                        <h1 className="text-4xl font-bold text-gray-400 sm:text-5xl md:text-6xl inline-block px-4 glassy-gradient-text">
                            Welcome to Bootcamp
                        </h1>
                        <p className="max-w-[700px] mx-auto text-gray-400 md:text-xl">
                            Social media platform for fitness enthusiasts
                        </p>
                        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                            <Link
                                href="https://bootcamp-media.vercel.app/auth/signup?redirect_url=https%3A%2F%2Fbootcamp-media.vercel.app"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-6 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Sign Up
                            </Link>
                            <Link
                                href="https://bootcamp-media.vercel.app/auth/signin?redirect_url=https%3A%2F%2Fbootcamp-media.vercel.app"
                                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-700 bg-transparent px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Log In
                            </Link>
                        </div>
                    </div>
                        </Fade >
                </div>
                <br></br>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-950 to-[#1e293b] dark:bg-gradient-to-r dark:from-gray-950 dark:to-[#1e293b]">
                <div className="container px-4 md:px-6 text-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter text-gray-50 sm:text-5xl md:text-6xl ">
                            Tech Stack
                        </h2>
                        <p className="max-w-[700px] mx-auto text-gray-400 md:text-xl">
                            Our Bootcamp app is built using the following technologies:
                        </p>
                        <br></br>
                        <Slide direction="up" triggerOnce>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="bg-gray-900 rounded-lg p-6 text-left">
                                <h3 className="text-lg font-semibold text-gray-50">Next.js</h3>
                                <p className="text-gray-400">A React framework for building server-rendered applications.</p>
                            </div>
                            <div className="bg-gray-900 rounded-lg p-6 text-left">
                                <h3 className="text-lg font-semibold text-gray-50">TypeScript</h3>
                                <p className="text-gray-400">A superset of JavaScript that adds optional static typing.</p>
                            </div>
                            <div className="bg-gray-900 rounded-lg p-6 text-left">
                                <h3 className="text-lg font-semibold text-gray-50">PostgreSQL</h3>
                                <p className="text-gray-400">A powerful, open-source object-relational database system.</p>
                            </div>
                            <div className="bg-gray-900 rounded-lg p-6 text-left">
                                <h3 className="text-lg font-semibold text-gray-50">Prisma</h3>
                                <p className="text-gray-400">A next-generation ORM for TypeScript and Node.js.</p>
                            </div>
                            <div className="bg-gray-900 rounded-lg p-6 text-left">
                                <h3 className="text-lg font-semibold text-gray-50">Clerk</h3>
                                <p className="text-gray-400">A user authentication and management platform for web applications.</p>
                            </div>
                            <div className="bg-gray-900 rounded-lg p-6 text-left">
                                <h3 className="text-lg font-semibold text-gray-50">Vercel</h3>
                                <p className="text-gray-400">A cloud platform for static sites and Serverless Functions.</p>
                            </div>
                        </div>
                            </Slide>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-950 to-[#1e293b] dark:bg-gradient-to-r dark:from-gray-950 dark:to-[#1e293b]">
                <div className="container px-4 md:px-6 text-center">
                    <Slide direction="up" triggerOnce>
                    <div className="space-y-4">
                        <div className="bg-gray-900 rounded-lg p-6 text-left">
                            <h2 className="text-2xl font-bold text-gray-50 ">
                                Notable Features
                            </h2>
                            <br></br>
                            <ul className="space-y-2 mt-4">
                                <li className="flex items-start">
                                    <MailsIcon className="h-6 w-6 text-gray-400 mr-3" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-50">Notifications</h3>
                                        <p className="text-gray-400">
                                            Stay up-to-date with the latest activities and updates from your community.
                                        </p>
                                        <br></br>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <FilePenIcon className="h-6 w-6 text-gray-400 mr-3" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-50">Create Posts</h3>
                                        <p className="text-gray-400">Share your thoughts, questions, and progress with
                                            the community.</p>
                                        <br></br>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <MessageCircleIcon className="h-6 w-6 text-gray-400 mr-3" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-50">Reply to Posts</h3>
                                        <p className="text-gray-400">
                                            Engage with others by commenting on their posts and sharing your insights.
                                        </p>
                                        <br></br>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <UsersIcon className="h-6 w-6 text-gray-400 mr-3" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-50">Communities</h3>
                                        <p className="text-gray-400">
                                            Join different communities based on your interests and connect with
                                            like-minded individuals.
                                        </p>
                                        <br></br>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </Slide>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-950 to-[#1e293b] dark:bg-gradient-to-r dark:from-gray-950 dark:to-[#1e293b]">
                <div className="container px-4 md:px-6 text-center">
                    <Fade direction="up" triggerOnce>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter text-gray-50 sm:text-5xl md:text-6xl ">
                            Give a star on GitHub
                        </h2>
                        <p className="max-w-[700px] mx-auto text-gray-400 md:text-xl">
                            Check out the features of our Bootcamp app on GitHub and feel free to post suggestions or features.
                        </p>

                        <Link
                            href="https://github.com/iminoaru/bootcamp"
                            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-700 bg-transparent px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}
                        >
                            GitHub
                        </Link>
                    </div>
                    </Fade>
                </div>
            </section>
        </>
    )
}

function FilePenIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
        </svg>
    )
}


function MailsIcon(props : any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="16" height="13" x="6" y="4" rx="2" />
            <path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" />
            <path d="M2 8v11c0 1.1.9 2 2 2h14" />
        </svg>
    )
}


function MessageCircleIcon(props : any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
    )
}


function UsersIcon(props : any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}