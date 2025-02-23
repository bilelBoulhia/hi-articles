import {motion} from "motion/react";
import {cn} from "@/lib/utils";

interface Props {
    className?: string;
    paragraph:string;
}

const DescriptionFliper =({className,paragraph}:Props)=>{
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 2}}
                    className={cn(className,"text-xl font-medium text-left")}>
            {paragraph.split(",").map((sentence, index) => (
                <motion.span key={index} className="inline-block mr-2"
                             initial={{opacity: 0, y: 40, scale: 0.98}}
                             viewport={{once: true}}
                             whileInView={{opacity: 1, y: 0, scale: 1}}
                             transition={{duration: 0.8, delay: index * 0.4 * 0.8}}>
                    {sentence.trim()}{index !== paragraph.split(",").length - 1 ? "," : ""}
                </motion.span>
            ))}
        </motion.div>
    )
}

export default DescriptionFliper;