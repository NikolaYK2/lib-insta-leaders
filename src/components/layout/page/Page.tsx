import { ComponentPropsWithoutRef, CSSProperties, ElementRef, forwardRef } from 'react'
import clsx from 'clsx'
import s from './page.module.scss'

type PageProps = ComponentPropsWithoutRef<'div'> & {
  /** Optional margin-top for the Page component, defaults to 36px */
  mt?: CSSProperties['marginTop']
  /** Optional margin-left for the Page component, defaults to 24px */
  ml?: CSSProperties['marginLeft']
}
export const Page = forwardRef<ElementRef<'div'>, PageProps>(
  ({ className, style, mt = 36, ml = 24, ...restProps }, forwardedRef) => {
    return (
      <div
        className={clsx(className, s.pageContainer)}
        style={{ marginTop: mt, marginLeft: ml, ...style }}
        {...restProps}
        ref={forwardedRef}
      ></div>
    )
  }
)

Page.displayName = 'Page'
