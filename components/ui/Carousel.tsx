"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import type { StaticImageData } from "next/image"
import { ArrowRight } from "lucide-react"

export interface article {
    id: number
    title: string
    img: StaticImageData
    description: string
}

interface VideoCarouselProps {
    articles: article[]
}

const Carousel: React.FC<VideoCarouselProps> = ({ articles }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [articles.length])

    return (
        <div className="relative w-full h-[50rem] rounded-lg flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
                {articles.map(
                    (article, index) =>
                        index === currentIndex && (
                            <motion.div
                                key={article.id}
                                className="absolute w-[95%] h-[85%] lg:h-[70%] bg-black bg-opacity-60 rounded-2xl shadow-xl shadow-black flex items-center justify-center overflow-hidden"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="relative w-full h-full group">
                                    <div className="absolute  inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-80" />
                                    <img
                                        alt={article.title}
                                        src={article.img.src || "/placeholder.svg"}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
                                    <div className="absolute max-w-96 bottom-0 left-0 right-0 p-6 text-white">
                                        <span className="text-3xl font-bold">{article.title}</span>
                                        <p className="text-sm opacity-80 line-clamp-6 mt-1 mb-4">{article.description}</p>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="relative group flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-white/20 to-white/10 border border-white/10 text-white font-medium transition-all duration-300 hover:border-white/20"
                                        >
                                            Read More
                                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ),
                )}
            </AnimatePresence>

            <div className="absolute bottom-0 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {articles.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                            index === currentIndex ? "bg-white" : "bg-gray-400"
                        } transition-colors duration-300`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Carousel

