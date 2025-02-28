"use client"

import React, { useState} from "react"
import {Mail} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"

import Toast from "@/components/ui/toast";
import {useForm} from "react-hook-form";
import { SubmitHandler} from "react-hook-form"
import { motion } from "motion/react"
import {shadowVariants} from "@/utils/types";
import DescriptionFliper from "@/components/ui/Description-Fliper";

const paragraph :string= 'subscribe to our newsletter, so you can Get notification , about the latest articles'
export default function CoolNewsletter() {
    const [showToast, setShowToast] = useState(false)
    const {register,handleSubmit
    } = useForm()

    const onSubmit: SubmitHandler<any> = (data) => {

        const insertdata = async (data: any) => {
            try {
                console.log('send');
            } catch (error) {
                console.error(error);
            }
        };
        insertdata(data).catch(r => console.error(r));

    }
1
    return (
        <div className='h-screen flex items-center w-full relative justify-center'>
        <div className="relative overflow-hidden py-8  [@media(min-width:360px)]:py-16  sm:py-24 w-full">
            <motion.div
                initial="hidden"
                viewport={{once: true}}
                whileInView="visible"
                variants={shadowVariants}
                className="absolute inset-0  bg-gradient-to-br from-purple-800 via-violet-700 to-pink-600  transform -skew-y-6"></motion.div>
            <div className="relative mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="bg-white/10  backdrop-blur-lg rounded-lg shadow-xl overflow-hidden">
                    <div className="px-6  py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:p-20">
                        <div className="lg:w-0 lg:flex-1">

                            {/*
                                initial={{x:'-104%'}}
                                whileInView={{x:0}}
                                viewport={{once: true}}
                                transition={{duration: 0.5, delay: 0.4, ease: "easeInOut"}}

                            */}
                            <h2
                              className="text-xl [@media(min-width:360px)]:text-2xl md:text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                                Get notifactions about new articles
                            </h2>
                            <div className="mt-4 max-w-3xl  text-purple-100">
                               <DescriptionFliper className=' text-xs [@media(min-width:360px)]:text-xl' paragraph={paragraph}/>
                            </div>
                        </div>
                        <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                            <form className="sm:flex" onSubmit={handleSubmit(onSubmit)}>
                                <div
                                    className="min-w-0 flex-1">
                                    <label htmlFor="email" className="sr-only ">
                                        Email address
                                    </label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder=" your email"
                                        {...register("email", {
                                            required: "email is required",
                                            pattern: {
                                                value: /\S+@\S+\.\S+/,
                                                message: "Please enter a valid email address"
                                            }
                                        })}
                                        className="placeholder:text-white bg-white/20 text-white placeholder-white border-0  focus-visible:ring-2  focus-visible:ring-purple-400 "
                                    />

                                    {/*{errors.email && <p className="text-red-500 text-sm mt-1 self-start">{errors}</p>}*/}
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <Button
                                        type='submit'
                                        aria-label='subscribe to news letter'
                                        className="w-full flex items-center justify-center  bg-violet-500  group hover:bg-violet-600 text-white transition-all duration-300 ease-in-out transform hover:scale-105"
                                    >

                                        <Mail className="mr-2  transition-transform transform group-hover:scale-110   h-5 w-5"/>
                                        subscribe
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Toast
                show={showToast}
                message="thank you for subscribing"
                onClose={() => setShowToast(false)}
            />

        </div>


        </div>
    )
}