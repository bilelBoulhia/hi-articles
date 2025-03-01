"use client"

import React, { useState } from "react"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import {Dialog, DialogContent, DialogTitle, DialogTrigger} from "@/components/ui/dialog"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import {motion} from "motion/react";

// Mock search results
const searchResults = [
    {
        id: 1,
        title: "Introduction to React",
        content:
            "React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components.",
        tag: "React",
    },
    {
        id: 2,
        title: "Getting Started with Next.js",
        content:
            "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React based web applications.",
        tag: "Next.js",
    },
    {
        id: 3,
        title: "Tailwind CSS Basics",
        content:
            "Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom user interfaces without writing custom CSS.",
        tag: "CSS",
    },
    {
        id: 4,
        title: "TypeScript Fundamentals",
        content:
            "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds optional types, classes, and modules to JavaScript.",
        tag: "TypeScript",
    },
    {
        id: 5,
        title: "State Management with Redux",
        content:
            "Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently and are easy to test.",
        tag: "Redux",
    },
]

export default function SearchModal() {
    const [isOpen, setIsOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")

    const filteredResults = searchResults.filter(
        (result) =>
            result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            result.content.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>

                <Button className='hover:bg-transparent' variant="ghost">
                    <div className="md:hidden rounded-full  h-10 w-11 flex justify-center items-center">
                        <MagnifyingGlassIcon className=" dark:text-whites size-5"/>
                    </div>
                    <div className="hidden  md:block relative m-5 z-10  ">
                        <div
                            className="flex items-center justify-between dark:bg-white bg-neutral-100 rounded-full overflow-hidden"
                        >
                            <input
                                type="text"
                                placeholder="search"
                                className="w-full dark:bg-white bg-neutral-100 text-black/20 placeholder-neutral-400  px-4 py-2 focus:outline-none"

                            />

                            <div
                                className="rounded-full  h-10 w-11 flex justify-center items-center"
                            >
                                <MagnifyingGlassIcon className="w-5  text-purple-500  h-5 "/>
                            </div>
                        </div>

                        <motion.div
                            className="absolute inset-0  rounded-full"
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            transition={{duration: 0.2, delay: 0.6}}
                            style={{
                                boxShadow: '0 0 15px rgba(168, 85, 247, 0.5), 0 0 30px rgba(168, 85, 247, 0.3), 0 0 45px rgba(168, 85, 247, 0.1)',
                                pointerEvents: 'none'
                            }}
                        />
                    </div>
                </Button>


            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px] p-0">
                <DialogTitle></DialogTitle>
                <div className="p-4 border-b">

                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        viewport={{once: true}}
                        variants={{
                            hidden: {width: '0', opacity: 1},
                            visible: {width: '100%', opacity: 1}
                        }}
                        transition={{duration: 0.6, ease: 'easeInOut'}}
                        className="flex items-center justify-between dark:bg-white bg-neutral-100  rounded-full overflow-hidden"
                    >
                        <input
                            type="text"
                            placeholder="search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}

                            className="w-full dark:bg-white bg-neutral-100 text-white   dark:text-black placeholder-neutral-400  px-4 py-2 focus:outline-none"

                        />

                        <div
                            className="rounded-full  h-10 w-11 flex justify-center items-center"
                        >
                            <MagnifyingGlassIcon className="w-5  text-purple-500  h-5 "/>
                        </div>
                    </motion.div>
                </div>
                <ScrollArea className="max-h-[60vh] p-4">
                    {filteredResults.length > 0 ? (
                        filteredResults.map((result) => (
                            <div
                                key={result.id}
                                className="mb-4 p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-lg font-semibold mb-2">{result.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                                    {result.content.length > 100 ? `${result.content.substring(0, 100)}...` : result.content}
                                </p>
                                <Badge variant="secondary" className="text-xs">
                                    {result.tag}
                                </Badge>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 dark:text-gray-400">No results found</p>
                    )}
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
}

