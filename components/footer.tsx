import { ThemeSwitcher } from '@/components/theme-switcher';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <>
      <Separator />
       <footer className="flex justify-between items-center text-sm px-8 py-4">
        <div className="flex items-center">
          <span className=''>built by <Link href="https://github.com/arandito/dev-portfolio" className='underline underline-offset-4 hover:text-zinc-400'>arandito.</Link></span> 
        </div>
        <div className="flex items-center">
          <ThemeSwitcher />
        </div>
      </footer>
    </>
  );
};

export default Footer;