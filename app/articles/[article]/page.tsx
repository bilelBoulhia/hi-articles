"use client"

import { motion } from "motion/react"
import {ArrowRight, Calendar, Clock, Share2} from 'lucide-react'
import { Button } from "@/components/ui/button"
import Carousel from "@/components/ui/CarouselV2";


export default function ArticlePage() {
    const article = {
        title: "The Future of E-commerce: Trends to Watch in 2024",
        author: "Jane Smith",
        date: "May 15, 2024",
        readTime: "8 min read",
        image: "https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/06/08204434/Scope-of-Business-Economics.jpg",
        content: [
            "The e-commerce landscape is constantly evolving, with new technologies and consumer behaviors shaping the way businesses operate online. As we move further into 2024, several key trends are emerging that will define the future of online retail.",
            "Artificial intelligence continues to revolutionize the shopping experience, with personalized recommendations becoming increasingly sophisticated. Retailers are now leveraging AI to predict customer needs before they even arise, creating a more intuitive and efficient shopping journey.",
            "Sustainability has moved from a nice-to-have feature to a core business requirement. Consumers are demanding transparent supply chains and eco-friendly practices, pushing brands to rethink their operations from production to delivery.",
            "The rise of social commerce has blurred the lines between entertainment and shopping. Platforms like Instagram, TikTok, and Pinterest have become powerful sales channels, allowing users to discover and purchase products without ever leaving their favorite apps.",
            "Augmented reality is transforming how consumers interact with products before purchase. Virtual try-ons for clothing, makeup, and home decor are reducing return rates and increasing customer satisfaction by setting realistic expectations.",
            "Voice commerce is gaining traction as smart speakers become household staples. Optimizing for voice search and creating voice-friendly shopping experiences will be crucial for brands looking to stay ahead of the curve.",
            "The payment landscape is diversifying, with cryptocurrencies and buy-now-pay-later options becoming mainstream. Offering flexible payment methods is no longer optional for businesses that want to maximize conversion rates.",
            "As these trends continue to evolve, businesses that stay adaptable and customer-focused will be best positioned to thrive in the ever-changing world of e-commerce."
        ]
    }

    const relatedArticles = [
        {
            title: "How Small Businesses Are Leveraging AI",
            category: "Entrepreneurship",
            image: "https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/06/08204434/Scope-of-Business-Economics.jpg",
            gradient: "from-[#4158D0] via-[#C850C0] to-[#FFCC70]",
        },
        {
            title: "E-commerce stuff",
            category: "E-commerce & Business",
            image: "https://www.investopedia.com/thmb/NhnAQzNqF2HrcKDmNZprh3JCk04=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/economics-source-b80e91b606bd4729815840bad4ff3ecd.png",
            gradient: "from-[#0093E9] to-[#80D0C7]",
        },
        {
            title: "Cryptocurrency: The New Frontier in Online Payments",
            category: "Finance & Economics",
            image: "https://t3.ftcdn.net/jpg/04/83/90/18/360_F_483901821_46VsNR67uJC3xIKQN4aaxR6GtAZhx9G8.jpg",
            gradient: "from-[#8EC5FC] to-[#E0C3FC]",
        },
        {
            title: "Campus Innovations: Student Startups Making Waves",
            category: "College News",
            image: "https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/06/08204434/Scope-of-Business-Economics.jpg",
            gradient: "from-[#fcdd8e] to-[#472fa3]",
        },
        {
            title: "The Psychology of Consumer Behavior Online",
            category: "E-commerce & Business",
            image: "https://www.gisma.com/uploads/sites/5/2023/09/BSc-DS-AI-GettyImages-1448152453.jpg",
            gradient: "from-[#0093E9] to-[#80D0C7]",
        },
    ]

    return (
        <div className="min-h-screen text-white">

            <div className="relative rounded-b-xl w-full h-[60vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
                <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 rounded-b-xl bg-gradient-to-t from-black to-transparent"></div>
            </div>


            <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-black/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/5"
                >

                    <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-sm font-medium mb-4">
                        E-commerce & Business
                    </div>


                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-transparent bg-clip-text">
                        {article.title}
                    </h1>


                    <div className="flex flex-wrap items-center gap-4 mb-8 text-gray-300">
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{article.date}</span>
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{article.readTime}</span>
                        </div>
                    </div>


                    <div className="space-y-4 mb-8">
                        {article.content.map((paragraph, index) => (
                            <p key={index} className="text-gray-200 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>


                    <div className="flex flex-wrap gap-4 mt-8">
                        <Button variant="outline" size="icon" className="border-gray-600">
                            <Share2 className="h-4 w-4" />
                        </Button>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.3}}
                className="w-full mx-auto py-16 overflow-hidden"
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-transparent bg-clip-text text-center">
                        Read More Articles
                    </h2>
                </div>


                <div className="mx-auto">
                    <Carousel>
                        {relatedArticles.map((article, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                                className="flex-shrink-0 group cursor-pointer h-full"
                            >
                                <div
                                    className="bg-black/40  max-h-[350px] min-h-[350px] backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-purple-400/50 transition-all duration-500 h-full flex flex-col">

                                    <div className="relative  w-full overflow-hidden">
                                        <img
                                            src={article.image || "/placeholder.svg"}
                                            alt={article.title}
                                            className="object-cover  w-full transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                                        {/* Category Badge */}
                                        <div
                                            className={`absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${article.gradient}`}
                                        >
                                            {article.category}
                                        </div>
                                    </div>


                                    <div className="p-4 flex flex-col flex-grow">
                                        <h3 className="font-medium text-white mb-2 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                                            {article.title}
                                        </h3>

                                        <div className="mt-auto pt-4 flex justify-between items-center">
                                            <span className="text-xs text-gray-400">5 min read</span>
                                            <ArrowRight
                                                className="h-4 w-4 text-purple-400 transform transition-transform duration-300 group-hover:translate-x-1"/>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </Carousel>
                </div>
            </motion.div>
        </div>
    )
}
