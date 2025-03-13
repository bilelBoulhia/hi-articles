import {FacebookIcon, Instagram, LinkedInIcon, Tiktok} from "@/components/ui/Icons";
import {ThemeSwitcher} from "@/components/theme-switcher";


export default function SubFooter() {
    return (

        <footer  id='ContactUs' className="w-full border-t-[1px] border-neutral-800   mt-4  overflow-hidden">
            <div className="mx-auto w-full">
                <div className="grid py-6 grid-cols-2">

                        <div>
                            <ul className="text-gray-500 text-xs dark:text-gray-400 font-medium">

                                <li className="mb-4">
                                    <a href="https://www.univ-alger3.dz/en/" className="hover:underline ">university of algiers 3
                                    </a>
                                </li>

                                <li>

                                    <span >hoi.univalger3@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul

                                className="text-gray-500 text-xs dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://wa.me/+213796664383" className="hover:underline z-20">+213 796 66
                                        43 83</a>
                                </li>
                                <li>
                                    <a href="https://wa.me/+213552553324" className="hover:underline">+213 552 55 33
                                        24</a>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>




        </footer>

    )
}

