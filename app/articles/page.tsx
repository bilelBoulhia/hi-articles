'use server'

import CategoryMenu from "@/app/articles/sections/Articles-Sub-Section";

export default async function Home(){

    return (
        <div className='flex w-full flex-row overflow-hidden items-start justify-center'>
            {/*articles content*/}
            <div className='flex  flex-col w-[80%] overflow-hidden items-center justify-center'>
                <CategoryMenu/>
            </div>
            {/*news section*/}
            <div className='border-l-[1px] text-center h-[100rem] items-center justify-center flex  w-[20%] border-neutral-800'>
                <div className=' w-full'>s</div>
            </div>
        </div>

    )
}