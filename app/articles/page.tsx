'use server'
import ArticlesSubSection from "@/app/articles/sections/Articles-Sub-Section";
import {MiniArticleCard} from "@/components/minified-article-card";
import MinifiedNewsCardList from "@/components/minified-news-section";

const categories = [
    {
        category: "general",
        data: [
            {
                title: "REST Is Dead: Why Your .NET API Should Move to GraphQL",
                subtitle: "Master GraphQL",
                date: "Dec 21, 2024",
                readTime: "5",
                imageUrl: "https://www.investopedia.com/thmb/NhnAQzNqF2HrcKDmNZprh3JCk04=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/economics-source-b80e91b606bd4729815840bad4ff3ecd.png",
                href: "#",
            },
            {
                title: "Understanding Serverless Computing",
                subtitle: "Cloud Technologies",
                date: "Jan 10, 2025",
                readTime: "6",
                imageUrl: "https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/06/08204434/Scope-of-Business-Economics.jpg",
                href: "#",
            },
            {
                title: "Global Market Trends in 2025",
                subtitle: "Economic Analysis",
                date: "Feb 2, 2025",
                readTime: "7",
                imageUrl: "https://www.gisma.com/uploads/sites/5/2023/09/BSc-DS-AI-GettyImages-1448152453.jpg",
                href: "#",
            },


        ],
    },
    {
        category: "economy",
        data: [
            {
                title: "Global Market Trends in 2025",
                subtitle: "Economic Analysis",
                date: "Feb 2, 2025",
                readTime: "7",
                imageUrl: "https://www.gisma.com/uploads/sites/5/2023/09/BSc-DS-AI-GettyImages-1448152453.jpg",
                href: "#",
            }
        ],
    },
    {
        category: "finance",
        data: [
            {
                title: "Investing in 2025: What You Need to Know",
                subtitle: "Personal Finance",
                date: "Mar 5, 2025",
                readTime: "8",
                imageUrl: "https://www.investopedia.com/thmb/NhnAQzNqF2HrcKDmNZprh3JCk04=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/economics-source-b80e91b606bd4729815840bad4ff3ecd.png",
                href: "#",
            }
        ],
    },
    {
        category: "science",
        data: [
            {
                title: "Breakthroughs in Quantum Computing",
                subtitle: "Future Technologies",
                date: "Apr 15, 2025",
                readTime: "9",
                imageUrl: "https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/06/08204434/Scope-of-Business-Economics.jpg",
                href: "#",
            }
        ],
    },
    {
        category: "secretariat",
        data: [],
    },
    {
        category: "math",
        data: [
            {
                title: "The Beauty of Prime Numbers",
                subtitle: "Mathematical Concepts",
                date: "May 20, 2025",
                readTime: "5",
                imageUrl: "https://t3.ftcdn.net/jpg/04/83/90/18/360_F_483901821_46VsNR67uJC3xIKQN4aaxR6GtAZhx9G8.jpg",
                href: "#",
            }
        ],
    },
];

export default async function Home(){

    return (
        <div className='flex flex-row items-center justify-center w-full h-full'>

            <style>
                {`
                .overflow-y-scroll::-webkit-scrollbar {
                display: none;
                }`}
            </style>
            <div
                className='flex h-screen overflow-y-scroll   flex-col w-full lg:w-[80%] overflow-hidden items-center justify-center'>
                <ArticlesSubSection/>
            </div>

            <div className='relative w-[20%]  flex-col lg:flex hidden h-screen  border-l-[1px] text-center items-start justify-start border-neutral-800'>

                <div className='w-full mt-3 '>
                    <h3 className="text-lg text-start bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500  text-transparent bg-clip-text font-semibold p-4">Latest News</h3>
                    <MinifiedNewsCardList/>
                </div>


                <div className='text-start mt-10'>
                <h3 className="text-lg font-semibold m-5 bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500  text-transparent bg-clip-text mb-4">our picks</h3>
                        {categories[0].data.map((article, index) => (
                            <MiniArticleCard
                                key={index}
                                title={article.title}
                                date={article.date}
                                readTime={article.readTime}
                                href={article.href}
                            />
                        ))}
                </div>

            </div>
        </div>

    )
}