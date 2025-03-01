"use client"

import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const categories = ['general', 'economy', 'finance', 'science', 'news', 'secretariat']

export default function CategoryMenu() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(false)
    const [activeCategory, setActiveCategory] = useState('general') // Default active category

    // Check if scrolling controls should be visible
    const checkScroll = () => {
        const container = scrollContainerRef.current
        if (!container) return

        setShowLeftArrow(container.scrollLeft > 0)

        setShowRightArrow(
            container.scrollLeft < container.scrollWidth - container.clientWidth - 5
        )
    }

    // Initialize scroll check
    useEffect(() => {
        checkScroll()
        window.addEventListener('resize', checkScroll)
        return () => window.removeEventListener('resize', checkScroll)
    }, []) // Removed scrollContainerRef from dependencies

    // Scroll functions
    const scrollLeft = () => {
        if (!scrollContainerRef.current) return
        scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' })
    }

    const scrollRight = () => {
        if (!scrollContainerRef.current) return
        scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' })
    }

    // Handle category click
    const handleCategoryClick = (category: string) => {
        setActiveCategory(category)
        // You can add additional logic here, such as navigating to a different page or fetching data
    }

    return (
        <div className=" px-6 w-[60%] self-baseline mx-10  py-2 border-b-[1px] border-neutral-500 relative">

            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }

                .hide-scrollbar {
                    -ms-overflow-style: none; /* IE and Edge */
                    scrollbar-width: none; /* Firefox */
                }
            `}</style>

            <Button
                variant="ghost"
                size="icon"
                className={cn(
                    "absolute left-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm transition-opacity",
                    showLeftArrow ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={scrollLeft}
                aria-label="Scroll left"
            >
                <ChevronLeft className="h-4 w-4"/>
            </Button>

            <div
                className="w-full overflow-x-auto hide-scrollbar"
                ref={scrollContainerRef}
                onScroll={checkScroll}
            >
                <div
                    className="flex text-gray-100 gap-4 flex-nowrap h-full items-center justify-start min-w-max">
                    {categories.map((category, index) => (
                        <span
                            key={index}
                            className={cn(
                                "p-4 group relative text-center hover:cursor-pointer whitespace-nowrap",
                                activeCategory === category ? "font-bold" : ""
                            )}
                            onClick={() => handleCategoryClick(category)}
                        >
                            <div
                                className={cn(
                                    "absolute bottom-3 h-[1px] bg-neutral-600 transition-all duration-300",
                                    activeCategory === category
                                        ? "w-[80%]"
                                        : "w-0 group-hover:w-[80%]"
                                )}
                            />
                            {category}
                        </span>
                    ))}
                </div>
            </div>

            <Button
                variant="ghost"
                size="icon"
                className={cn(
                    "absolute right-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm transition-opacity",
                    showRightArrow ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={scrollRight}
                aria-label="Scroll right"
            >
                <ChevronRight className="h-4 w-4"/>
            </Button>
        </div>
    )
}