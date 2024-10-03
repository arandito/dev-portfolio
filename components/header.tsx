import { ThemeSwitcher } from '@/components/theme-switcher';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center px-8 py-4">
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src="https://github.com/arandito.png" />
            <AvatarFallback>AA</AvatarFallback>
          </Avatar>
          {/* <span className='px-4 text-xl'>antonio aranda</span> */}
        </div>
        <div className="flex items-center">
          <ThemeSwitcher />
        </div>
      </header>
      <Separator />
    </>
  );
};

export default Header;