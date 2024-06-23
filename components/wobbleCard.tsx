"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export function WobbleCardDemo() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                className=""
            >
                <div className="max-w-xs">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        UI/UX Tasarım Uzmanı
                    </h2>
                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                        Hep sitelerimin güzel gözükmesini istemişimdir. Bu yüzden buraya da büyük derecede zaman yatırımı yaptım. Benimle beraber kullanımı kolay ve harika gözüken web siteleri yapabilirsiniz!
                    </p>
                </div>
                <Image
                    src="/lineer.png"
                    width={500}
                    height={500}
                    alt="linear demo image"
                    className="absolute -right-3/4 md:-right-[10%] lg:-right-[10%] -bottom-10 object-contain rounded-2xl transform -rotate-12"
                />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    PS24' Designer
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                    Photoshop'ta hatrı sayılır tecrübem var ve projelerinize katkıda bulunabilirim.
                </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                <div className="max-w-sm">
                    <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Full Stack Web Developer
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                        4 Yıldan fazla süredir uğraştığım bu meslekte, sizlere güvenilir ve özel hizmetler sunmak için çalışıyorum. Arka uç ve ön ucu aynı anda geliştirebileceğim gibi projenizin durumuna göre sadece bir bölüme de odaklanabilirim.
                    </p>
                </div>
                <Image
                    src="/lineer-2.png"
                    width={300}
                    height={300}
                    alt="linear demo image"
                    className="absolute -right-3/4 md:-right-[10%] lg:-right-[-5%] -bottom-5 object-contain rounded-2xl transform -rotate-12"
                />
            </WobbleCard>
        </div>
    );
}
