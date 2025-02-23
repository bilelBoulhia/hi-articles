"use client"

import { motion } from "motion/react"
import {

    Mail,
    Phone,
    MapPin,
} from "lucide-react"
import Link from "next/link"
import DescriptionFliper from "@/components/ui/Description-Fliper";
import {FacebookIcon,Instagram,LinkedInIcon, Tiktok} from "@/components/ui/Icons";


const paragraph : string = 'Join our community and Improve your skills ideas, business, and creative thinking.'
export default function Footer() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    }

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden ">

            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"/>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"/>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"/>

            <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(white,transparent_85%)]"/>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                className="relative w-full max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16"
            >
                {/* Left Section */}
                <motion.div variants={itemVariants} className="space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                            Let's Connect
                        </h2>
                        <div className="text-gray-400 max-w-md">
                            <DescriptionFliper paragraph={paragraph}/>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <motion.div variants={itemVariants} className="flex items-center space-x-4">
                            <div
                                className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                <Mail className="h-5 w-5 text-white"/>
                            </div>
                            <div>
                                <p className="text-gray-400">Email us at</p>
                                <p className="text-white">hoi.univalger3@gmail.com</p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex items-center space-x-4">
                            <div
                                className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                <Phone className="h-5 w-5 text-white"/>
                            </div>
                            <div>
                                <p className="text-gray-400">Call us at</p>
                                <p className="text-white">+213 796 66 43 83</p>
                                <p className="text-white">+213 552 55 33 24</p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex items-center space-x-4">
                            <div
                                className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                <MapPin className="h-5 w-5 text-white"/>
                            </div>
                            <div>
                                <p className="text-gray-400">Find us at</p>
                                <Link
                                    href="https://www.univ-alger3.dz/en/"
                                    className="text-white hover:text-purple-400 transition-colors"
                                >
                                    University of Algiers 3
                                </Link>
                            </div>
                        </motion.div>
                    </div>


                </motion.div>

                <motion.div variants={itemVariants} className="space-y-12">


                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-white">Follow Us</h3>
                        <div className="flex space-x-6">
                            <Link
                                href="https://www.instagram.com/hi.club.alger3/"
                                className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors group"
                            >
                                <Instagram
                                    className="h-5 w-5 text-gray-400 group-hover:text-purple-400 transition-colors"/>
                            </Link>

                            <Link
                                href="https://www.facebook.com/profile.php?id=61552555332858"
                                className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors group"
                            >
                                <FacebookIcon
                                    className="h-5 w-5 text-gray-400 group-hover:text-purple-400 transition-colors"/>
                            </Link>

                            <Link
                                href="https://www.tiktok.com/@clubhouseofideas"
                                className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors group"
                            >
                                <Tiktok
                                    className="h-5 w-5 text-gray-400 group-hover:text-purple-400 transition-colors"/>
                            </Link>

                            <Link
                                href="https://www.linkedin.com/company/house-of-ideas-club"
                                className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors group"
                            >
                                <LinkedInIcon
                                    className="h-5 w-5 text-gray-400 group-hover:text-purple-400 transition-colors"/>
                            </Link>
                        </div>
                    </div>
                </motion.div>


            </motion.div>
            <motion.div
                variants={itemVariants}
                className="absolute bottom-2 left-0 right-0 text-center text-sm text-gray-400"
            >

                <p className="mt-1">
                    Made by bilel,{" "}
                    <Link href="https://github.com/bilelBoulhia" className="hover:text-purple-400 transition-colors">
                        Github
                    </Link>{" "}
                    {"<3"}
                </p>
            </motion.div>
        </div>
    )
}

