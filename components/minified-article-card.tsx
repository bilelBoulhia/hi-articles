import { Clock } from 'lucide-react'
import Link from "next/link"

interface MiniArticleCardProps {
    title: string
    date: string
    readTime: string
    href: string
}

export function MiniArticleCard({ title, date, readTime, href }: MiniArticleCardProps) {
    return (
        <Link
            href={href}
            className="block p-3 text-start border-b-[1px] mx-3   transition-colors duration-200"
        >
            <h1 className="font-medium text-start text-xs line-clamp-1 mb-2">{title}</h1>
            <div className="flex items-center text-xs text-gray-500 space-x-3">
                <span>{date}</span>
                <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{readTime} min read</span>
                </div>
            </div>
        </Link>
    )
}
