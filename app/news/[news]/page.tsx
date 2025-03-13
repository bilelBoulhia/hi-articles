"use client"


import { Calendar, Clock, ChevronRight, Share2, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "motion/react"

export default function NewsPage() {
    const featuredNews = {
        title: "Global Tech Summit Announces Breakthrough in Quantum Computing",
        author: "Michael Chen",
        date: "June 3, 2024",
        readTime: "4 min read",
        category: "Technology",
        image: "https://t3.ftcdn.net/jpg/04/83/90/18/360_F_483901821_46VsNR67uJC3xIKQN4aaxR6GtAZhx9G8.jpg",
        content: [
            "In a groundbreaking announcement at the Global Tech Summit, researchers revealed a significant advancement in quantum computing that could revolutionize the field of cryptography and data security.",
            "The team, led by Dr. Sarah Johnson, demonstrated a quantum processor capable of maintaining quantum coherence for record-breaking durations, potentially solving one of the biggest challenges in quantum computing development.",
            '"This breakthrough could accelerate the timeline for practical quantum applications by several years," stated Dr. Johnson during the keynote presentation. Industry experts are already speculating about the implications for fields ranging from medicine to finance.',
            "Major tech companies have shown immediate interest, with several announcing new funding initiatives for quantum research following the summit's conclusion yesterday.",
        ],
    }

    const moreNews = [
        {
            title: "New Renewable Energy Plant Powers 100,000 Homes",
            category: "Environment",
            date: "June 2, 2024",
            image: "https://www.gisma.com/uploads/sites/5/2023/09/BSc-DS-AI-GettyImages-1448152453.jpg",
            excerpt:
                "The largest solar farm in the region has officially begun operations, providing clean energy to approximately 100,000 homes.",
        },
        {
            title: "Stock Markets Reach All-Time High Following Economic Report",
            category: "Finance",
            date: "June 2, 2024",
            image:
                "https://www.investopedia.com/thmb/NhnAQzNqF2HrcKDmNZprh3JCk04=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/economics-source-b80e91b606bd4729815840bad4ff3ecd.png",
            excerpt:
                "Global markets responded positively to the latest economic indicators, with major indices closing at record levels.",
        },
        {
            title: "International Space Station Welcomes New Crew Members",
            category: "Space",
            date: "June 1, 2024",
            image: "/placeholder.svg?height=400&width=600",
            excerpt:
                "Three astronauts successfully docked with the ISS yesterday, beginning a six-month mission focused on microgravity research.",
        },
        {
            title: "Major Healthcare Reform Bill Passes Senate",
            category: "Politics",
            date: "May 31, 2024",
            image: "/placeholder.svg?height=400&width=600",
            excerpt:
                "After months of debate, the comprehensive healthcare reform bill has cleared its final legislative hurdle.",
        },
        {
            title: "New Study Links Exercise to Improved Cognitive Function",
            category: "Health",
            date: "May 30, 2024",
            image: "/placeholder.svg?height=400&width=600",
            excerpt:
                "Researchers have found compelling evidence that regular physical activity enhances brain function across all age groups.",
        },
        {
            title: "Tech Giant Unveils Next-Generation Smartphone",
            category: "Technology",
            date: "May 29, 2024",
            image: "/placeholder.svg?height=400&width=600",
            excerpt: "The highly anticipated device features breakthrough battery technology and advanced AI capabilities.",
        },
    ]

    return (
        <div className="min-h-screen  w-full text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-black/40 rounded-xl overflow-hidden border border-white/5"
                >

                    <div className="lg:col-span-3 relative h-[300px] lg:h-full min-h-[300px]">
                        <img
                            src={featuredNews.image || "/placeholder.svg"}
                            alt={featuredNews.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent"></div>


                    </div>


                    <div className="lg:col-span-2 p-6 flex flex-col">
                        <div className="mb-2 flex items-center gap-4 text-sm text-gray-300">
                            <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span>{featuredNews.date}</span>
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                <span>{featuredNews.readTime}</span>
                            </div>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-transparent bg-clip-text">{featuredNews.title}</h2>

                        <div className="space-y-3 mb-6 flex-grow">
                            {featuredNews.content}
                         </div>

                        <div className="flex gap-3 mt-auto">

                            <Button variant="outline" size="icon" className="border-gray-600">
                                <Share2 className="h-4 w-4" />
                            </Button>

                        </div>
                    </div>
                </motion.div>
            </div>


            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-purple-500">More News</h2>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {moreNews.map((news, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="30 rounded-lg overflow-hidden bg-black/40 border-white/5 border-[1px]  transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="relative h-48">
                                <img src={news.image || "/placeholder.svg"} alt={news.title} className="w-full h-full object-cover" />
                                <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-transparent to-gray-900/80"></div>

                                <div className="absolute bottom-3 left-3 flex items-center text-xs text-gray-300">
                                    <Calendar className="w-3 h-3 mr-1" />
                                    <span>{news.date}</span>
                                </div>
                            </div>

                            <div className="p-4 flex flex-col flex-grow">
                                <h3 className="font-bold text-lg mb-2 text-white  transition-colors">
                                    {news.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{news.excerpt}</p>
                                <Button
                                    variant="ghost"
                                    className="mt-auto hover:bg-transparent  justify-start px-0 py-0"
                                >
                                    Read More <ChevronRight className="h-4 w-4 ml-1" />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
    )
}

