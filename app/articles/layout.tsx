import Header from "@/app/articles/sections/Header";

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){
    return (
        <div className='font-serif flex w-full flex-col  overflow-hidden items-center justify-center'>
            <Header/>
            {children}

        </div>
    )
}



