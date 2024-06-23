"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { title } from "./primitives";
import { useTheme } from "next-themes";
import Link from "next/link";

export function TracingBeamDemo() {
    const { theme } = useTheme();
    return (
        <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                {dummyContent.map((item, index) => (
                    <div key={`content-${index}`} className="mb-10">
                        <h2 className={`${theme == 'light' ? 'bg-black text-white' : 'bg-white text-black'} rounded-full text-sm w-fit px-4 py-1 mb-4`}>
                            {item.badge}
                        </h2>

                        <p className={twMerge("text-xl mb-4")}>
                            {item.title}
                        </p>

                        <div className="text-sm  prose prose-sm dark:prose-invert">
                            {item?.image && (
                                <Image
                                    src={item.image}
                                    alt="blog thumbnail"
                                    height="500"
                                    width="500"
                                    className="rounded-lg mb-10 object-cover"
                                />
                            )}
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
}

const dummyContent = [
    {
        title: "Test Olduk",
        description: (
            <>
                <p>
                    <Link target="_blank" href={'https://testolduk.com'} className="text-blue-300">Test Olduk, Bir test oluşturme platformu. (Benzer site: Onedio)</Link>
                </p>
            </>
        ),
        badge: "React & NextJS",
        image:
            "/reactxnext.png",
    },
    {
        title: "IX Roleplay RageMP",
        description: (
            <>
                <p>
                    Biz GTA 5 oyun modu, ileri düzey yazılım dillerini profesyonel şekilde dizdik, şu anda aktif olarak çalışmıyor fakat kod düzeni talep doğrultusunda gösterilebilir.
                </p>
            </>
        ),
        badge: "C# & Javascript & React",
        image:
            "/ix-logo.png",
    },
    {
        title: "KONMUN",
        description: (
            <>
                <p>
                <Link target="_blank" href={'https://konmun.org'} className="text-blue-300">Konmun, bir uluslararası kongrenin konyadaki oluşumunun similasyonu. Bunun için gerekli siteyi üstlendim.</Link>
                </p>
            </>
        ),
        badge: "NextJS & React & CustomCSS",
        image:
            "/konmun.png",
    },
];
