import { ThemeSwitcher } from '@/components/theme-switcher';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <>
      <Separator />
       <footer className="flex justify-between items-center px-10 py-4">
        <div className="flex items-center">
          <span className=''>built by <Link href="https://github.com/arandito" className='underline underline-offset-2 text-blue-400 hover:text-foreground'>arandito.</Link></span> 
        </div>
        <div className="flex items-center">
          <ThemeSwitcher />
        </div>
      </footer>
    </>
  );
};

export default Footer;