"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"


interface LetterPairProps {
    initialLetter: string
    transformedLetter: string

    delay: number
}

const LetterPair: React.FC<LetterPairProps> = ({ initialLetter, transformedLetter, delay }) => {
    return (
        <div className="relative inline-block w-[3.25rem] text-center h-[1.2em] ">
            <AnimatePresence>
                <motion.span
                    key={`i${initialLetter}-${delay}`}
                    initial={{ height: "auto" }}
                    animate={{ height: 0 }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.5, delay: delay / 1000 }}
                    className="absolute overflow-hidden  inset-x-0 top-0"
                >
                    {initialLetter}
                </motion.span>
                <motion.span
                    key={`t${transformedLetter}-${delay}`}
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.5, delay: delay / 1000 }}
                    className="absolute overflow-hidden  inset-x-0 bottom-0"
                >
                    {transformedLetter}
                </motion.span>
            </AnimatePresence>
        </div>
    )
}

interface WordTransformProps {
    initialWord: string
    transformedWord: string
    className?: string

}

const WordTransform: React.FC<WordTransformProps> = ({ className, initialWord, transformedWord }) => {
    const letterPairs: Array<[string, string]> = initialWord.split("").map((letter, index) => [letter, transformedWord[index]]);
    return (
        <div className={className}>
            {letterPairs.map((pair, index) => (
                <LetterPair
                    key={index}
                    initialLetter={pair[0]}
                    transformedLetter={pair[1]}
                    delay={index * 100}
                />
            ))}
        </div>
    );
};


export default WordTransform

