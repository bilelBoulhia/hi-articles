'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { useState } from "react";

const categories = [
    { category: 'general', data: [] },
    { category: 'economy', data: [] },
    { category: 'finance', data: [] },
    { category: 'science', data: [] },
    { category: 'secretariat', data: [] },
    { category: 'math', data: [] }
];

export default function ArticlesSubSection() {
    const [data, setData] = useState([]);

    const setCategoryData = (cat: string) => {
        // Set data here based on the category
        setData([]);
    };

    return (
        <Tabs className='mt-2 w-full' defaultValue="general">
            <TabsList className='bg-transparent  border-b-[2px] w-full justify-start rounded-none p-5 sticky top-0 z-10'>
                {categories.map((category, i) => (
                    <TabsTrigger key={i} onClick={() => setCategoryData(category.category)} value={category.category}>
                        {category.category}
                    </TabsTrigger>
                ))}
            </TabsList>
            {categories.map((category, i) => (
                <TabsContent key={i} value={category.category}>
                    <div className='text-center w-full h-[100rem]'>
                        {category.category} content goes here.
                    </div>
                </TabsContent>
            ))}
        </Tabs>
    );
}