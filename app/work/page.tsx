'use client';

import Footer from '@/components/footer';
import WorkSection from '@/components/work/work-section';
import BackArrow from '@/components/backarrow'; 

export default function Home() {
  return (
    <div className='min-h-screen w-full flex flex-col'>
      <div className='mx-auto max-w-[47rem] w-full font-local flex flex-col flex-grow'>
        <main className='px-8 flex-grow'>
          <BackArrow className="pb-4 pt-14"/>
          <div className='flex flex-col pb-10 leading-6 gap-6 pb-20'>
            <WorkSection />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}