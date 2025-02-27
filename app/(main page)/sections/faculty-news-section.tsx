"use client"

import { Button } from "@/components/ui/button"
import { GraduationCap, Users, Calendar, ArrowRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import m1 from "@/app/assets/dummynews/molt9a1.jpg"
import m2 from "@/app/assets/dummynews/molt9a2.jpg"
import m3 from "@/app/assets/dummynews/ham.jpg"

const newsItems = [
    {
        id: 1,
        title: "الملتفلى الوطني الفلاحة و الاشفال",
        image: m1.src,

        date: "May 15, 2024",
    },
    {
        id: 2,
        title: "الملتفلى الوطني العلمي الاول",
        image: m2.src,
        date: "May 10, 2024",
    },
    {
        id: 3,
        title: "الإعلان عن نتائج مسابقات الالتحاق بالتكوين في الطور الثالث",
        image: m3.src,
        date: "May 5, 2024",
    },
]

export default function FacultyNewsSection() {
    const [hoveredItem, setHoveredItem] = useState<number | null>(null)

    return (
        <>
            {/*desktop*/}
            <div className="min-h-screen hidden md:flex  flex-col md:flex-row items-center w-full justify-center relative overflow-hidden">
                <div className="px-4 w-full items-center justify-center flex min-h-screen md:w-[50%] md:px-6">
                    <div className="space-y-6">
                        <div className="inline-block rounded-lg bg-purple-500/10 px-3 py-1 text-sm font-mono">Faculty Updates</div>

                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            Faculty News
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="bg-purple-500/10 p-2 rounded-full mt-1">
                                    <GraduationCap className="h-5 w-5 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-white">Academic Publications</h3>
                                    <p className="text-gray-400">
                                        Access the latest research papers, journal articles, and academic contributions from our faculty.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="bg-purple-500/10 p-2 rounded-full mt-1">
                                    <Users className="h-5 w-5 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-white">Faculty Profiles</h3>
                                    <p className="text-gray-400">
                                        Learn about our professors' expertise, research interests, and professional backgrounds.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="bg-purple-500/10 p-2 rounded-full mt-1">
                                    <Calendar className="h-5 w-5 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-white">Upcoming Lectures</h3>
                                    <p className="text-gray-400">
                                        Never miss important faculty lectures, workshops, and speaking engagements.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-4 w-full  flex   md:w-[50%] items-center justify-center  ">
                    <div className="w-full ">
                        <div className="grid md:mt-12  grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 relative">
                            {newsItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`group relative overflow-hidden rounded-xl transition-all duration-300 ease-in-out
                ${index % 3 === 0 ? "md:col-span-2" : "md:col-span-1"}
                ${hoveredItem !== null && hoveredItem !== item.id ? "opacity-60" : "opacity-100"}
              `}
                                    style={{
                                        transform: hoveredItem === item.id ? "scale(1.02)" : "scale(1)",
                                        transition: "all 0.3s ease",
                                    }}
                                    onMouseEnter={() => setHoveredItem(item.id)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    <div className="aspect-video relative">
                                        <Image
                                            src={item.image || "/placeholder.svg"}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                        <div className="absolute bottom-0 left-0 p-4 w-full">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-xs text-gray-300">{item.date}</span>
                                            </div>
                                            <h3 className="text-white font-medium text-lg md:text-xl group-hover:text-purple-200 transition-colors">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 text-right">
                            <Button
                                variant="ghost"
                                className="text-purple-300 hover:text-purple-100 hover:bg-purple-900/20 group"
                                asChild
                            >
                                <Link href="/">
                                    View all news
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/*phone*/}

            <div className="flex items-center justify-center lg:hidden px-4">
                <div className="overflow-y-scroll snap-y snap-mandatory h-screen w-full">
                    <section className="snap-start">
                        <div className='min-h-screen flex flex-col w-full justify-center items-center'>
                            <div className="md:space-y-6 space-y-12">
                                <div className="inline-block rounded-lg bg-purple-500/10 px-3 py-1 text-sm font-mono">
                                    Faculty Updates
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                    Faculty News
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="bg-purple-500/10 p-2 rounded-full mt-1">
                                            <GraduationCap className="h-5 w-5 text-purple-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-white">Conferences</h3>
                                            <p className="text-gray-400">
                                               check out the latest conferences that are held in the faculty
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="bg-purple-500/10 p-2 rounded-full mt-1">
                                            <Users className="h-5 w-5 text-purple-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-white">Faculty Profiles</h3>
                                            <p className="text-gray-400">
                                                learn about research interests, and professional backgrounds.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="bg-purple-500/10 p-2 rounded-full mt-1">
                                            <Calendar className="h-5 w-5 text-purple-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-white">Events</h3>
                                            <p className="text-gray-400">
                                                 faculty events, workshops, and speaking engagements.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="snap-start">
                        <div className='min-h-screen flex flex-col w-full justify-center items-center'>
                            <div className="grid grid-cols-2 w-full gap-4">
                                {newsItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="group relative overflow-hidden rounded-xl transition-all duration-300 ease-in-out"
                                    >
                                        <div className="aspect-video relative">
                                            <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                            <div className="absolute bottom-0 left-0 p-4 w-full">
                                                <h3 className="text-white font-medium text-lg group-hover:text-purple-200 transition-colors">
                                                    {item.title}
                                                </h3>
                                                <span className="text-xs text-gray-300">{item.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 text-right">
                                <Button
                                    variant="ghost"
                                    className="text-purple-300 hover:text-purple-100 hover:bg-purple-900/20 group"
                                    asChild
                                >
                                    <Link href="/">
                                        View all news
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

