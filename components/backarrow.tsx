import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const BackArrow = ({ className = '' }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={`group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors ${className}`}
    >
      <span className="text-base font-medium">← home</span>
    </button>
  );
};

export default BackArrow;