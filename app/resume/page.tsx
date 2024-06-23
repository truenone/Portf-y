import { title } from '@/components/primitives'
import { TracingBeamDemo } from '@/components/tracing-beam';
import { WobbleCardDemo } from '@/components/wobbleCard';
import React from 'react';


export default function page() {
    return (
        <div className='flex flex-col gap-5'>
            <div className='w-full flex flex-row justify-center'>
                <h1 className={title()}>Özgeçmiş</h1>
            </div>
            <TracingBeamDemo />
        </div>
    )
}
