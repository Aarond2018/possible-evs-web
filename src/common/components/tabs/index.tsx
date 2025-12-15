'use client';
import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn as mergeClassName } from '@/common/lib/utils'; // Assuming you have this utility function

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={mergeClassName(
      'border rounded-lg overflow-hidden flex',
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    // className={mergeClassName(
    //   "px-4 py-2.5 text-sm font-medium border-r last:border-r-0",
    //   "data-[state=active]:bg-black data-[state=active]:text-white",
    //   className
    // )}
    className={mergeClassName(
      'py-2.5 text-sm font-medium last:border-r-0 text-gray_003 px-2 border-r-0 border-b-2 border-transparent data-[state=active]:bg-transparent data-[state=active]:text-primary_color data-[state=active]:border-primary_color',
      'data-[state=active]:bg-transparent data-[state=active]:text-primary_color data-[state=active]:border-primary_color',
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={mergeClassName(className)}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
