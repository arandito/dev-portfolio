'use client';

import Bio from '@/components/bio';
import Footer from '@/components/footer';
import BlurHeader from '@/components/blur';
import Info from '@/components/info';
import Links from '@/components/links';
import ProjectSection from '@/components/project/project-section';
import WorkSection from '@/components/work/work-section';

export default function Home() {
  return (
    <div className='min-h-screen w-screen'>
      <BlurHeader />
      <div className='mx-auto max-w-[47rem] w-full font-local flex flex-col'>
        <main className='px-8 pb-12 flex-grow'>
          <span className='text-2xl font-semibold text-zinc-700 dark:text-white'>
            Antonio Aranda
          </span>
          <Info />
          <Bio />
          <div className='flex flex-col sm:flex-row md:justify-between py-10 leading-6 gap-6'>
            <WorkSection />
            <ProjectSection />
          </div>
          <Links />
        </main>
        <Footer />
      </div>
    </div>
  );
}
