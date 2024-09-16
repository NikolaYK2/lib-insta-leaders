import * as SliderPrimitive from '@radix-ui/react-slider'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import clsx from 'clsx'

import s from './slider.module.scss'

const Slider = forwardRef<
  ElementRef<typeof SliderPrimitive.Root>,
  ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root ref={ref} className={clsx(s.Root, className)} {...props}>
    <SliderPrimitive.Track className={clsx(s.Track, className)}>
      <SliderPrimitive.Range className={clsx(s.Range, className)} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={clsx(s.Thumb, className)} />
    <SliderPrimitive.Thumb className={clsx(s.Thumb, className)} />
  </SliderPrimitive.Root>
))

Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
