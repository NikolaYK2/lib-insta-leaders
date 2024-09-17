import { Children, Fragment, isValidElement, ReactNode } from 'react'
import s from './header.module.scss'
import { Typography, TypographyVariant } from '../typography'
import useWindowSize from '../../hooks/useWindowSize.ts'
import { LanguageSelector, NotificationBell } from './childrenSet'
import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import { DropDownMenu } from '../dropDownMenu'
import { DynamicIcon } from '../icons'

export type HeaderProps = {
  variant?: 'app' | 'admin'
  children?: ReactNode
  /**
   * The viewport width in pixels below which mobileMode of the Header turns on.
   * @default 360
   */
  mobileBreakpoint?: number // in pixels
}

export const Header = ({ variant = 'app', children, mobileBreakpoint = 360 }: HeaderProps) => {
  const { width } = useWindowSize()
  const isMobileMode = width !== undefined && width <= mobileBreakpoint

  const title = 'Inctagram'
  const subTitleRegular = variant === 'admin' && 'Super'
  const subTitleSemiBold = variant === 'admin' && 'Admin'

  const childrenWeb = Children.map(children, (child, i) => <Fragment key={i}>{child}</Fragment>)

  const childrenMobile = (
    <>
      {/*returns child LanguageSelector*/}
      {Children.toArray(children).find(
        child => isValidElement(child) && child.type === LanguageSelector
      )}
      {/*returns DropDownMenu with children (except for LanguageSelector) mobileProps*/}
      <DropDownMenu
        trigger={{
          icon: 'MoreHorizontalOutline',
        }}
        isArrow={true}
        items={
          Children.map(children, child => isValidElement(child) && child.props.mobileProps) || []
        }
      />
    </>
  )

  return (
    <div className={s.container}>
      <div className={s.leftSide}>
        <Typography asChild={true} variant={TypographyVariant.large}>
          <span>{title}</span>
        </Typography>
        {
          // hides 'SuperAdmin' in case of mobileMode
          !isMobileMode && (
            <>
              <Typography asChild={true} variant={TypographyVariant.small_text}>
                <span>{subTitleRegular}</span>
              </Typography>
              <Typography asChild={true} variant={TypographyVariant.semibold_small_text}>
                <span>{subTitleSemiBold}</span>
              </Typography>
            </>
          )
        }
      </div>
      <div className={s.rightSide}>{isMobileMode ? childrenMobile : childrenWeb}</div>
    </div>
  )
}
