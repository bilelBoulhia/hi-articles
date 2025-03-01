import Header from "@/app/articles/sections/Header";
import Footer from "@/app/articles/sections/Footer";

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){
    return (
        <div className='flex w-full flex-col  overflow-hidden items-center justify-center'>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}