import img2 from "@/app/assets/img2.webp";
import img1 from "@/app/assets/img1.webp";
import img3 from "@/app/assets/img3.webp";
import img4 from "@/app/assets/img4.webp";
import WordTransform from "@/components/ui/animated-headingV2";
import { motion } from "motion/react";
import Carousel from "@/components/ui/Carousel";

const paragraph= 'House of Ideas E-Journal, a website run by Secretariat Department, sharing articles on science, e-commerce & finance, and many many more, adding a voice to the club and its community.'


const articles = [

    {
        id: 1,
        title: 'Dangers of Tiktok',
        img: img2,
        description: `TikTok has taken the world by storm, becoming one of the most popular social media platforms, especially among younger generations. 
    However, beneath its entertaining surface lies a host of concerns, including privacy risks, the spread of misinformation, 
    and the impact of short-form content on attention spans. This article explores the darker side of TikTok, analyzing its algorithm-driven 
    content recommendations, concerns about data security, and its potential influence on mental health. Should users be more cautious about 
    what they share and consume on the platform? Read on to uncover the hidden risks of TikTok and how to navigate them responsibly.`
    },
    {
        id: 2,
        title: 'VR Future',
        img: img1,
        description: `Virtual Reality (VR) is no longer a distant dream but an evolving reality that is reshaping how we interact with the digital world. 
    This article explores the rapid advancements in VR technology, from ultra-realistic simulations to its applications in gaming, education, 
    healthcare, and even social interactions. We also examine the potential challenges VR faces, including ethical concerns, accessibility issues, 
    and the long-term psychological effects of extended immersion in virtual environments. With major companies investing billions into the metaverse, 
    what does the future hold for VR? Discover how this technology could become an inseparable part of our daily lives in the coming decades.`
    },
    {
        id: 3,
        title: 'Dangers of AGI',
        img: img3,
        description: `Artificial General Intelligence (AGI) represents a future where machines could achieve human-like cognitive abilities, 
    making decisions independently and potentially surpassing human intelligence. While AGI holds incredible promise, it also comes 
    with significant risks, including job displacement, ethical dilemmas, and the possibility of AI developing goals misaligned with human interests. 
    This article delves into the existential threats posed by AGI, the debate over AI safety, and the ongoing efforts to regulate and control its development. 
    As we move closer to AGI, are we truly prepared for its consequences?`
    },
    {
        id: 4,
        title: 'DEEP SEEK R1',
        img: img4,
        description: `The DEEP SEEK R1 is a cutting-edge technological innovation that is set to revolutionize the field of artificial intelligence and robotics. 
    Equipped with advanced machine learning algorithms and state-of-the-art sensory capabilities, this device can perform complex tasks with 
    unprecedented efficiency. This article takes a deep dive into the specifications of the DEEP SEEK R1, its real-world applications, 
    and how it compares to similar technologies in the industry. With breakthroughs in AI-powered robotics happening at an accelerating pace, 
    could the DEEP SEEK R1 be a game-changer for the future of automation?`
    }
];
export  default function Hero(){
    return (
        <div
            className="flex justify-center items-center lg:flex-row  w-full relative flex-col px-4">

            <div
                className='relative flex-col gap-[1rem] text-5xl [@media(min-width:450px)]:text-7xl sm:text-8xl min-h-screen xl:min-h-full  justify-center items-start flex w-full xl:w-[60%]'>

                <motion.span
                    initial={{x: "-150%"}}
                    animate={{x: "0%"}}
                    transition={{duration: 1, delay: 1.5}}
                    className='bg-clip-text font-bold text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500'>
                    HOUSE OF IDEAS
                </motion.span>

                <span className='text-center'>
                  <WordTransform
                      className="font-bold "
                      initialWord="WELCOME TO "
                      transformedWord="E-JOURNAL"/>
              </span>

                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, delay: 2}}
                    style={{
                        fontFamily: '"Liberation Mono"',
                        perspective: "1000px",
                    }}
                    className="text-xl font-medium font-mono text-left "
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
                initial={{x: "100%"}}
                animate={{x: "0"}}
                transition={{duration: 1, delay: 1.5}}
                className=' flex flex-col justify-center items-center h-full      w-full   xl:w-[40%]'>
                <Carousel articles={articles}/>
            </motion.div>

        </div>
    )
}