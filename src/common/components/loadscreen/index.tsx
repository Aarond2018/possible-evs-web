'use client';
import React from 'react';
import Refresh2 from '../../icons/Refresh2';
import { cn } from '@/common/lib/utils';

type Props = {
  fullscreen?: boolean;
  className?: string;
  size?: number;
};

export default function LoadScreen({
  className,
  fullscreen,
  size = 32,
}: Props) {
  return (
    <div
      className={cn(
        'bg-slate-50 w-full flex items-center justify-center',
        fullscreen ? 'h-screen' : 'h-full',
        className
      )}
    >
      <Refresh2 size={size} className="animate-spin" />
    </div>
  );
}
