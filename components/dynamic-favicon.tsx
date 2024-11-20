'use client';

import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';

const DynamicFavicon: React.FC = () => {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const updateFavicon = (theme: string | undefined) => {
      const isDark = theme === 'dark';
      const faviconPath = isDark ? '/favicon-dark.ico' : '/favicon-light.ico';
      
      const existingFavicons = document.querySelectorAll('link[rel="icon"]');
      existingFavicons.forEach(link => link.remove());

      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = faviconPath;
      document.head.appendChild(link);
    };

    updateFavicon(resolvedTheme);
  }, [resolvedTheme]);

  return null;
};

export default DynamicFavicon;