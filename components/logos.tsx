import React, { useEffect, useState } from 'react';
import { useTheme } from "next-themes";
import Image from "@/components/image";

const Logos = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  const isDarkMode = resolvedTheme === 'dark';

  return (
    <div className="flex justify-between items-center py-6 sm:py-3 gap-8 w-full px-2 sm:px-20">
      <Image
        src="/images/alexa.png"
        alt="Alexa logo"
        width={130}
      />
      <div className='mt-2'>
        <Image
          src={isDarkMode ? "/images/aws-dark.png" : "/images/aws-light.png"}
          alt="AWS logo"
          width={115}
        />
      </div>
      <Image
        src="/images/columbia.png"
        alt="Columbia logo"
        width={125}
      />
    </div>
  );
};

export default Logos;