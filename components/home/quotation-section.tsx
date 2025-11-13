'use client';

import { ArrowRight } from 'lucide-react';
import { itemVariants } from '@/utils/constants';
import { MotionDiv } from '../common/motion-wrapper';
import { useRouter } from 'next/navigation';

export default function Quotation() {

    const router = useRouter();

    const redirectToAbout = () => {
      router.push('/contact-us'); 
  };

    return(
        <MotionDiv
          variants={itemVariants}
           initial={{y:20, opacity:0}}
           whileInView={{y:0, opacity:1 }}
           transition={{duration:0.5, delay:0.2}}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-22">
            <div className="flex flex-col justify-center items-center gap-4">
                <h2 className="text-4xl lg:text-5xl text-gray-900 font-bold text-center">Ready to Start your project</h2>
                <p className="text-[16px] lg:text-lg text-neutral-500">Get in touch with us for a consultation and quote</p>
                <button className='flex items-center justify-center border border-neutral-300 rounded-xl px-4 py-2 gap-2 hover:bg-neutral-100 hover:border-gray-900 hover:cursor-pointer' onClick={redirectToAbout}>
                    <div className="text-sm lg:text-[16px] font-medium">Get Appointment</div>
                    <div><ArrowRight/></div>
                </button>
            </div>
        </MotionDiv>
    )
}