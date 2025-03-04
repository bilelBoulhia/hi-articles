"use client"
import { Card, CardFooter, CardHeader } from "@/components/ui/Card"
import { Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

interface NewsItem {
    id: number
    title: string

    category: string
    date: string
    readTime: string
    imageUrl: string
}

const newsItems: NewsItem[] = [
    {
        id: 1,
        title: "نتائج تع كاش حاجة",
        category: "Technology",
        date: "Mar 4, 2025",
        readTime: "3 min",
        imageUrl: "data:image/jpeg;base64,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",
    },
    {
        id: 2,
        title: "ملتقى تاع كاش حاجة خلاف",
        category: "Environment",
        date: "Mar 3, 2025",
        readTime: "4 min",
        imageUrl: "https://www.univ-alger3.dz/wp-content/uploads/2023/11/000055-1024x683.jpg",
    },
    {
        id: 3,
        title: "دراهم وكاش حاجة",
         category: "Finance",
        date: "Mar 2, 2025",
        readTime: "2 min",
        imageUrl: "https://www.univ-alger3.dz/wp-content/uploads/2023/11/000064-1024x683.jpg",
    },
]

export default function NewsCardList() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkScreenSize()
        window.addEventListener("resize", checkScreenSize)

        return () => window.removeEventListener("resize", checkScreenSize)
    }, [])

    return (
        <div>

            <div className="space-y-6 text-start">
                {newsItems.map((item) => (
                    <Card
                        key={item.id}
                        className="shadow-sm mx-2 hover:shadow-md transition-shadow duration-200 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${item.imageUrl})` }} />
                        <div className="absolute inset-0 backdrop-blur-xs bg-background/70" />

                        <CardHeader className="p-3 pb-0 relative z-10">
                            <div className="flex justify-between items-start">
                                <span className="text-xs text-muted-foreground">{item.date}</span>
                            </div>
                            <h4 className="font-medium text-sm line-clamp-2">{item.title}</h4>
                        </CardHeader>

                        <CardFooter className="p-3 pt-0 flex justify-between items-center relative z-10">
                            <div className="flex items-center text-xs text-muted-foreground">
                                <Clock className="h-3 w-3 mr-1" />
                                {item.readTime}
                            </div>
                            <Link
                                href={`/news/${item.id}`}
                                className="text-xs font-medium text-primary flex items-center hover:underline"
                            >
                                Read more
                                <ArrowRight className="h-3 w-3 ml-1" />
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

