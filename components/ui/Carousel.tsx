"use client"

import type React from "react"
import { useState, useEffect} from "react"
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
      <div className="relative w-full h-screen rounded-lg flex items-center justify-center overflow-hidden">
        <AnimatePresence initial={false}>
          {articles.map((article, index) => (
              <motion.div
                  key={article.id}
                  className={`absolute w-[90%] h-[70%] bg-black bg-opacity-60 rounded-2xl shadow-xl shadow-black flex items-center justify-center overflow-hidden
                        ${index === currentIndex ? "z-20" : "z-10"} 
                        ${index === (currentIndex + 1) % articles.length ? "z-0" : ""} 
                        ${index === (currentIndex - 1 + articles.length) % articles.length ? "z-0" : ""}`}
                  initial={{
                    scale: 0.8,
                    x: index > currentIndex ? "100%" : "-100%",
                    opacity: 0,
                    rotateY: index > currentIndex ? 45 : -45,
                  }}
                  animate={{
                    scale: index === currentIndex ? 1 : 0.8,
                    x: index === currentIndex ? 0 : index > currentIndex ? "100%" : "-100%",
                    opacity: index === currentIndex ? 1 : 0.3,
                    rotateY: index === currentIndex ? 0 : index > currentIndex ? 45 : -45,
                  }}
                  exit={{
                    scale: 0.8,
                    x: index < currentIndex ? "-100%" : "100%",
                    opacity: 0,
                    rotateY: index < currentIndex ? -45 : 45,
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <div className="relative w-full h-full group">
                  <div
                      className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-80"/>

                  <img
                      alt={article.title}
                      src={article.img.src || "/placeholder.svg"}
                      className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                  <div className={`absolute max-w-96   bottom-0 left-0 right-0 p-6 text-white transform`}>
                    <span className="text-3xl font-bold">{article.title}</span>
                    <p className="text-sm opacity-80 line-clamp-15 mt-1 mb-4">{article.description}</p>
                    <motion.button
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        className="relative group flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-white/20 to-white/10 border border-white/10 text-white font-medium transition-all duration-300  hover:border-white/20"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"/>

                    </motion.button>
                  </div>
                </div>
              </motion.div>
          ))}
        </AnimatePresence>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {articles.map((_, index) => (
              <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"} transition-colors duration-300`}
                  aria-label={`Go to video ${index + 1}`}
              ></button>
          ))}
        </div>
      </div>
  )
}

export default Carousel

