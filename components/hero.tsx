'use client'
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function FlipWordsDemo() {
    const words = ["modern", "güvenli", "güzel", "teknik"];

    return (
        <div className=" flex justify-center items-center px-4">
            <div className="text-6xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                Benimle
                <FlipWords words={words} /> <br />
                websiteleri ve projeler oluşturun.
            </div>
        </div>
    );
}
