"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Clock, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ArticleCardProps {
    title: string
    subtitle: string
    date: string
    readTime: string
    imageUrl: string
    href: string
    featured?: boolean
}

export function ArticleCard({
                                title,
                                subtitle,
                                date,
                                readTime,
                                imageUrl,
                                href = "#",
                                featured = false,
                            }: ArticleCardProps) {
    const [imageError, setImageError] = useState(false)

    return (
        <div
            className={cn(
                "group relative overflow-hidden my-5 mx-3 rounded-xl bg-neutral-900  shadow-sm transition-all duration-200 hover:shadow-md ",
                featured && "md:col-span-2",
            )}
        >
            <Link href={href} className="absolute  inset-0 z-10">
                <span className="sr-only">View article: {title}</span>
            </Link>

            <div className="flex h-full flex-col md:flex-row">

                {/*border-[2px] border-b-0 md:border-b-2 md:rounded-bl-xl rounded-b-none border-neutral-800 md:border-r-0 md:rounded-r-none*/}
                <div className="flex flex-1 flex-col  rounded-xl     justify-between p-5">
                    <div className="space-y-3">
                        <h2 className="line-clamp-2 text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-gray-50 md:text-xl">
                            {title}
                        </h2>
                        <p className="line-clamp-2 text-base text-gray-600 dark:text-gray-400">{subtitle}</p>
                    </div>

                    <div
                        className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
                        {/*<div className="flex items-center gap-1.5">*/}
                        {/*    <Star className="h-4 w-4 fill-amber-400 stroke-amber-400"/>*/}
                        {/*    <span className="font-medium">editor choice</span>*/}
                        {/*</div>*/}
                        <div className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4"/>
                            <span>{date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4"/>
                            <span>{readTime} min read</span>
                        </div>
                    </div>
                </div>
                <div className="relative h-52 w-full shrink-0 overflow-hidden md:h-auto md:w-2/5">
                    <Image
                        unoptimized
                        src={!imageError ? imageUrl : "/placeholder.svg?height=400&width=600"}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={() => setImageError(true)}
                        sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    {featured && (
                        <div
                            className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                            Featured
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

