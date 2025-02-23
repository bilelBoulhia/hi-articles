'use client'
import Hero from "@/app/(main page)/sections/hero";
import CoolNewsletter from "@/app/(main page)/sections/newsletter";
import Footer from "@/app/(main page)/sections/footer";
import AbstractBackground from "@/components/ui/abstract-background";
import Header from "@/app/(main page)/sections/header";

export default function Home() {
    return (
        <div className="flex flex-col w-full h-screen overflow-y-scroll snap-y snap-mandatory ">
            <Header/>
            <AbstractBackground/>
            <style>
                {`
                .overflow-y-scroll::-webkit-scrollbar {
                display: none;
                }`}
            </style>
            <section className='snap-start w-full min-h-screen'>
                <Hero/>
            </section>
            <section className='snap-start  w-full min-h-screen'>
                <CoolNewsletter/>
            </section>
            <section className='snap-start  w-full min-h-screen '>
                <Footer/>
            </section>

        </div>
    );
}
