"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs"
import { useEffect, useRef, useState, useCallback } from "react"
import {ArticleCard} from "@/components/Article-card";



export const categories = [
    {
        category: "general",
        data: [
            {
                title: "REST Is Dead: Why Your .NET API Should Move to GraphQL",
                subtitle: "Master GraphQL",
                date: "Dec 21, 2024",
                readTime: "5",
                imageUrl: "https://www.investopedia.com/thmb/NhnAQzNqF2HrcKDmNZprh3JCk04=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/economics-source-b80e91b606bd4729815840bad4ff3ecd.png",
                href: "#",
            },
            {
                title: "Understanding Serverless Computing",
                subtitle: "Cloud Technologies",
                date: "Jan 10, 2025",
                readTime: "6",
                imageUrl: "https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/06/08204434/Scope-of-Business-Economics.jpg",
                href: "#",
            },
            {
                title: "Global Market Trends in 2025",
                subtitle: "Economic Analysis",
                date: "Feb 2, 2025",
                readTime: "7",
                imageUrl: "https://www.gisma.com/uploads/sites/5/2023/09/BSc-DS-AI-GettyImages-1448152453.jpg",
                href: "#",
            },
            {
                title: "Understanding Serverless Computing",
                subtitle: "Cloud Technologies",
                date: "Jan 10, 2025",
                readTime: "6",
                imageUrl: "https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/06/08204434/Scope-of-Business-Economics.jpg",
                href: "#",
            },
            {
                title: "REST Is Dead: Why Your .NET API Should Move to GraphQL",
                subtitle: "Master GraphQL",
                date: "Dec 21, 2024",
                readTime: "5",
                imageUrl: "https://www.investopedia.com/thmb/NhnAQzNqF2HrcKDmNZprh3JCk04=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/economics-source-b80e91b606bd4729815840bad4ff3ecd.png",
                href: "#",
            },
            {
                title: "Global Market Trends in 2025",
                subtitle: "Economic Analysis",
                date: "Feb 2, 2025",
                readTime: "7",
                imageUrl: "https://www.gisma.com/uploads/sites/5/2023/09/BSc-DS-AI-GettyImages-1448152453.jpg",
                href: "#",
            },
        ],
    },
    {
        category: "economy",
        data: [
            {
                title: "Global Market Trends in 2025",
                subtitle: "Economic Analysis",
                date: "Feb 2, 2025",
                readTime: "7",
                imageUrl: "https://www.gisma.com/uploads/sites/5/2023/09/BSc-DS-AI-GettyImages-1448152453.jpg",
                href: "#",
            }
        ],
    },
    {
        category: "finance",
        data: [
            {
                title: "Investing in 2025: What You Need to Know",
                subtitle: "Personal Finance",
                date: "Mar 5, 2025",
                readTime: "8",
                imageUrl: "https://www.investopedia.com/thmb/NhnAQzNqF2HrcKDmNZprh3JCk04=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/economics-source-b80e91b606bd4729815840bad4ff3ecd.png",
                href: "#",
            }
        ],
    },
    {
        category: "science",
        data: [
            {
                title: "Breakthroughs in Quantum Computing",
                subtitle: "Future Technologies",
                date: "Apr 15, 2025",
                readTime: "9",
                imageUrl: "https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/06/08204434/Scope-of-Business-Economics.jpg",
                href: "#",
            }
        ],
    },
    {
        category: "secretariat",
        data: [],
    },
    {
        category: "math",
        data: [
            {
                title: "The Beauty of Prime Numbers",
                subtitle: "Mathematical Concepts",
                date: "May 20, 2025",
                readTime: "5",
                imageUrl: "https://t3.ftcdn.net/jpg/04/83/90/18/360_F_483901821_46VsNR67uJC3xIKQN4aaxR6GtAZhx9G8.jpg",
                href: "#",
            }
        ],
    },
];

export default function ArticlesSubSection() {
    const [data, setData] = useState(categories[0].data);
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(false)
    const tabsListRef = useRef<HTMLDivElement>(null)

    const setCategoryData = (cat: string) => {

        setData([])
    }

    const checkForArrows = useCallback(() => {
        if (tabsListRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = tabsListRef.current
            setShowLeftArrow(scrollLeft > 0)
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1)
        }
    }, [])

    useEffect(() => {
        checkForArrows()
        window.addEventListener("resize", checkForArrows)
        return () => window.removeEventListener("resize", checkForArrows)
    }, [checkForArrows])

    const scroll = (direction: "left" | "right") => {
        if (tabsListRef.current) {
            const scrollAmount = 200
            const newScrollLeft = direction === "left" ? tabsListRef.current.scrollLeft - scrollAmount : tabsListRef.current.scrollLeft + scrollAmount

            tabsListRef.current.scrollTo({
                left: newScrollLeft,
                behavior: "smooth",
            })
            setTimeout(checkForArrows, 300)
        }
    }

    return (
        <Tabs className="h-full w-full" defaultValue="general">
            <style>
                {`
                .overflow-y-scroll::-webkit-scrollbar {
                display: none;
                }`}
            </style>

            <div className="relative">
                {showLeftArrow && (
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-1/2 z-20 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-background shadow-md border"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="h-5 w-5"/>
                    </button>
                )}

                <div className="relative  overflow-hidden ">
                    <TabsList
                        ref={tabsListRef}
                        className="bg-transparent overflow-y-scroll h-full  w-full justify-start md:justify-center rounded-none py-4 px-1  sticky top-0 z-10 overflow-x-auto scrollbar-hide flex gap-2"
                        onScroll={checkForArrows}
                    >

                        {categories.map((category, i) => (
                            <TabsTrigger
                                key={i}
                                onClick={() => setCategoryData(category.category)}
                                value={category.category}
                                className="px-4 py-2 text-sm font-medium capitalize rounded-full border border-transparent data-[state=active]:border-primary/20 data-[state=active]:bg-neutral-900 data-[state=active]:text-primary transition-all duration-200 hover:bg-neutral-900"
                            >
                                {category.category}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                {showRightArrow && (
                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-1/2 z-20 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-background shadow-md border"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="h-5 w-5"/>
                    </button>
                )}
            </div>

            {categories.map((category, i) => (
                <TabsContent key={i} value={category.category}>
                    {category.data.length > 0 ? (
                        category.data.map((article, index) => (
                            <ArticleCard key={index} {...article} />
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No articles available</p>
                    )}
                </TabsContent>
            ))}
        </Tabs>
    )
}

