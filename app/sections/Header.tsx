'use client'
import TubeLightNavbar from "@/components/ui/TubelightNavbar";
import {NewHiIcon} from "@/components/ui/Icons";
import React, {useState} from "react";
import SearchModal from "@/components/search-modal";

export default function Header(){
    // const [searchQuery, setSearchQuery] = useState("");
    // const handleSearchQuery = function (searchQuery: string) {
    //     setSearchQuery(searchQuery);
    // }
    return (
        <header className="fixed top-0 flex justify-between items-center left-0 right-0 z-50 dark:bg-neutral-900 border dark:border-gray-500/20 backdrop-blur-lg py-1 px-2  rounded-b-xl shadow-lg dark:shadow-black">
            <NewHiIcon className='w-[2rem]' animate={true}/>
           <div className='flex  justify-center items-center'>
               <TubeLightNavbar/>
               <div className=' inline-block  md:min-w-[320px] '>
                   <SearchModal/>
               </div>


           </div>

        </header>
)
}