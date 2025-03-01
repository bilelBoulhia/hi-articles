import Header from "@/app/articles/sections/Header";
import Footer from "@/app/articles/sections/Footer";
import CategoryMenu from "@/app/articles/sections/Category-Menu";

export default function Home(){
    return (
        <div className='flex w-full flex-col overflow-hidden items-center justify-center'>
            <CategoryMenu/>
        </div>
    )
}