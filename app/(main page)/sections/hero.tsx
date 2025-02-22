import img2 from "@/app/assets/img2.webp";
import img1 from "@/app/assets/img1.webp";
import img3 from "@/app/assets/img3.webp";
import img4 from "@/app/assets/img4.webp";
import { motion } from "motion/react";

import Carousel from "@/components/ui/Carousel";
import ThickWordTransform from "@/components/ThickWordTransform";
import AbstractBackground from "@/components/ui/abstract-background";

const paragraph= 'House of Ideas E-Journal, a website run by Secretariat Department, sharing articles on science, e-commerce & finance, and many many more, adding a voice to the club and its community.'


const articles = [{
        id: 1,
        title: 'Dangers of Tiktok',
        img: img2,
        description: `TikTok has taken the world by storm, becoming one of the most popular social media platforms, especially among younger generations. 
    However, beneath its entertaining surface lies a host of concerns, including privacy risks, the spread of misinformation, 
    and the impact of short-form content on attention spans. This article explores the darker side of TikTok, analyzing its algorithm-driven 
    content recommendations, concerns about data security, .`
    },
    {
        id: 2,
        title: 'VR Future',
        img: img1,
        description: `Virtual Reality (VR) is no longer a distant dream but an evolving reality that is reshaping how we interact with the digital world. 
    This article explores the rapid advancements in VR technology.`
    },
    {
        id: 3,
        title: 'Dangers of AGI',
        img: img3,
        description: `Artificial General Intelligence (AGI) represents a future where machines could achieve human-like cognitive abilities, 
    making decisions independently and potentially surpassing human intelligence. While AGI holds incredible promise, it also comes 
    with significant risks, including job displacement, ethical dilemmas`
    },
    {
        id: 4,
        title: 'DEEP SEEK R1',
        img: img4,
        description: `The DEEP SEEK R1 is a cutting-edge technological innovation that is set to revolutionize the field of artificial intelligence and robotics. 
    Equipped with advanced machine learning algorithms and state-of-the-art sensory capabilities.`
    }
];
const isMobile = window.innerWidth > 1024 ;
export  default function Hero(){

    return (
        <div className="flex justify-center items-center lg:flex-row  mt-[3rem] lg:mt-0  w-full relative flex-col  px-4">
            <AbstractBackground/>
            <div
                className='relative flex-col gap-[1rem] text-5xl [@media(min-width:450px)]:text-7xl sm:text-8xl min-h-[calc(100vh-3rem)] xl:min-h-full  justify-center items-start flex w-full xl:w-[60%]'>
                <motion.span
                    initial={{x: "-150%"}}
                    animate={{x: "0%"}}
                    transition={{duration: 1, delay: 1.5}}
                    className="relative inline-block ">

                    <span
                        className="absolute top-0 left-0 bg-clip-text font-bold text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500"
                        style={{transform: "translate(0.25px, 0.25px)"}}>
                        HOUSE OF IDEAS
                    </span>
                    <span

                        className="absolute top-0 left-0  bg-clip-text font-bold text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500"
                        style={{transform: "translate(-0.25px, -0.25px)"}}>
                        HOUSE OF IDEAS
                    </span>

                    <span
                        className="relative bg-clip-text font-bold text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 ">
                        HOUSE OF IDEAS
                    </span>
                </motion.span>


                <span className='text-center' style={{fontWeight: 1000}}>
                  <ThickWordTransform
                      initialWord="WELCOME TO "
                      transformedWord="E-JOURNAL"/>

              </span>

                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, delay: 2}}
                    style={{
                        perspective: "1000px",
                    }}
                    className="text-xl font-medium  text-left "
                >
                    {paragraph.split(",").map((sentence, index) => (
                        <motion.span

                            className="inline-block mr-2"
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 40,
                                scale: 0.98,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.5 * 0.8,
                                ease: [0.2, 0.65, 0.3, 0.9],
                            }}
                        >
                            {index === paragraph.split(",").length - 1 ? sentence.trim() : sentence.trim() + ","}
                        </motion.span>
                    ))}
                </motion.div>
            </div>

            <motion.div
                initial={{x: isMobile ? "100%" : "0%"}}
                animate={{x: "0"}}
                transition={{duration: 1, delay: 1.5}}
                className=' flex flex-col justify-center items-center w-full  max-h-screen overflow-hidden   xl:w-[40%]'>
                <div className="relative text-center block  lg:hidden max-w-2xl w-full mb-2  overflow-hidden">
                    <motion.span
                        className="inline-block mx-1 "
                        initial={{opacity: 0, x: -10}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.4
                        }}
                    >
                        our
                    </motion.span>
                    <motion.span
                        className="inline-block mx-1 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500"
                        initial={{opacity: 0, y: -10}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            duration: 0.7
                        }}
                    >
                        Latest
                    </motion.span>

                    <motion.span
                        className="inline-block mx-1 "
                        initial={{opacity: 0, x: -10}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.4
                        }}
                    >
                        Articles
                    </motion.span>

                    <motion.span
                        className="inline-block mx-1  font-bold"
                        initial={{opacity: 0, x: 10}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.6
                        }}
                    >
                        :)
                    </motion.span>
                </div>
                <Carousel articles={articles}/>
            </motion.div>

        </div>
    )
}