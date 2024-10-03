'use client';

import Bio from '@/components/bio';
import Footer from '@/components/footer';
import Header from '@/components/header'
import Info from '@/components/info';
import Links from '@/components/links';
import ProjectSection from '@/components/project/project-section';
import WorkSection from '@/components/work/work-section';

export default function Home() {
  return (
    <div className='min-h-screen mx-auto max-w-[55rem] w-full px-1 font-local flex flex-col'>
      <Header />
      <main className='px-8 py-8 flex-grow'>
        <div className='mb-2'>
          <span className='text-4xl sm:text-5xl font-semibold bg-gradient-to-r bg-clip-text text-transparent from-blue-700 via-sky-500 to-cyan-400 dark:to-cyan-200'>
            antonio aranda
          </span>
        </div>
        <Info />
        <Bio />
        <div className='flex flex-col sm:flex-row md:justify-between leading-6 gap-6'>
          <WorkSection />
          <ProjectSection />
        </div>
        <Links />
      </main>
      <Footer />
    </div>
  );
}
