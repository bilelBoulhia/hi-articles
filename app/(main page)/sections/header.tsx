import { Button } from "@/components/ui/button"
import {SecretariatIcon} from "@/components/ui/Icons";
import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 dark:bg-[#0A0A0A] z-50  w-full border-b">
            <nav className="flex h-16 items-center justify-between px-4 md:px-6">
                <div  className="flex items-center">
                    <SecretariatIcon className='h-8 w-8'/>
                </div>
                <div className="flex items-center gap-4">
                    <Link href='https://www.houseofideas.club'>
                        <Button variant="ghost"  className="text-sm hover:bg-transparent focus:text-white">
                            our website
                        </Button>
                    </Link>
                    <Link href='/articles'>
                    <Button className="text-sm bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90">
                        Articles
                    </Button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

