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
import {FacebookEmbed} from "react-social-media-embed";
import InstagramProfile from "@/components/ui/instagram-profile";



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
        <div className="relative min-h-screen w-full  flex  flex-row p-0 items-center justify-center overflow-hidden ">


            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                className="relative px-4  [@media(min-width:850px)]:w-[50%] w-full py-2 grid grid-cols-1  gap-1"
            >

                <motion.div variants={itemVariants} className="space-y-12">
                    <div className="space-y-4">
                        <motion.h2
                            initial={{x: '-80%'}}
                            whileInView={{x: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, delay: 0.4, ease: "easeInOut"}}

                            className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                            Let's Connect
                        </motion.h2>
                        <div className="dark:text-white max-w-md">
                            <DescriptionFliper className='text-xl' paragraph={paragraph}/>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <motion.div variants={itemVariants} className="flex items-center space-x-4">
                            <div
                                className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                <Mail className="h-5 w-5 text-white"/>
                            </div>
                            <div>
                                <p className="dark:text-gray-400 text-gray-600">Email us at</p>
                                <p className="dark:text-white">hoi.univalger3@gmail.com</p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex items-center space-x-4">
                            <div
                                className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                <Phone className="h-5 w-5 text-white"/>
                            </div>
                            <div>
                                <p className="dark:text-gray-400 text-gray-600">Call us at</p>
                                <p className="dark:text-white">+213 796 66 43 83</p>
                                <p className="dark:text-white">+213 552 55 33 24</p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex items-center space-x-4">
                            <div
                                className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                <MapPin className="h-5 w-5 text-white"/>
                            </div>
                            <div>
                                <p className="dark:text-gray-400 text-gray-600">Find us at</p>
                                <Link
                                    href="https://www.univ-alger3.dz/en/"
                                    className="dark:text-white hover:text-purple-400 transition-colors"
                                >
                                    University of Algiers 3
                                </Link>
                            </div>
                        </motion.div>
                    </div>


                </motion.div>

                <motion.div variants={itemVariants} className="space-y-4 mt-2 [@media(min-height:730px)]:mt-9">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold font-sans dark:text-white">Follow Us</h3>
                        <div className="flex  space-x-6">
                            <Link
                                href="https://www.instagram.com/hi.club.alger3/"
                                className="h-12 w-12  [@media(min-width:850px)]:hidden rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors group"
                            >
                                <Instagram
                                    className="h-5 w-5 text-gray-400 transition-colors"/>
                            </Link>

                            <Link
                                href="https://www.facebook.com/profile.php?id=61552555332858"
                                className="h-12 w-12 rounded-full bg-white/5  flex items-center justify-center hover:bg-white/10 transition-colors group"
                            >
                                <FacebookIcon
                                    className="h-5 w-5 dark:text-white   transition-colors"/>
                            </Link>

                            <Link
                                href="https://www.tiktok.com/@clubhouseofideas"
                                className="h-12 w-12 rounded-full bg-white/5  flex items-center justify-center hover:bg-white/10 transition-colors group"
                            >
                                <Tiktok

                                    className="h-5 w-5 text-white  transition-colors"/>
                            </Link>

                            <Link
                                href="https://www.linkedin.com/company/house-of-ideas-club"
                                className="h-12 w-12 rounded-full bg-white/5  flex items-center justify-center hover:bg-white/10 transition-colors group"
                            >
                                <LinkedInIcon
                                    className="h-5 w-5 dark:text-white   transition-colors"/>
                            </Link>
                        </div>
                    </div>
                </motion.div>


            </motion.div>


            <div className='mt-8 p-5 hidden [@media(min-width:850px)]:flex'>
                <Link href={'https://www.instagram.com/houseofideas.club'}>
                    <InstagramProfile/>
                </Link>


            </div>

            <motion.div
                variants={itemVariants}
                className="absolute bottom-2  left-0 right-0 text-center text-sm text-gray-400"
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

