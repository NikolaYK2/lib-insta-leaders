import { ElementRef, forwardRef } from 'react'
import * as Select from '@radix-ui/react-select'
import { SelectItem, Selector } from '../../../select/Select.tsx'
import s from './languageSelector.module.scss'
import { DynamicIcon } from '../../../icons'
import { Typography, TypographyVariant } from '../../../typography'
import useWindowSize from '../../../../hooks/useWindowSize.ts'
import { clsx } from 'clsx'

export type LanguageSelectorProps = {
  onValueChange?: (value: string) => void
  /**
   * The viewport width in pixels below which mobileMode of the Header turns on.
   * @default 360
   */
  mobileBreakpoint?: number // in pixels
}

export const LanguageSelector = forwardRef<ElementRef<typeof Select.Root>, LanguageSelectorProps>(
  ({ onValueChange, mobileBreakpoint = 360 }: LanguageSelectorProps, forwardedRef) => {
    const { width } = useWindowSize()
    const isMobileMode = width !== undefined && width <= mobileBreakpoint

    return (
      <Selector
        defaultValue={'Russian'}
        className={clsx(s.selector, isMobileMode && s.mobile)}
        onValueChange={onValueChange}
        ref={forwardedRef}
      >
        <SelectItem value={'Russian'}>
          <div className={s.selectItem}>
            <DynamicIcon
              iconId={'FlagRussia'}
              width={20}
              viewBox={'0 0 24.5 20'}
              className={s.icon}
            />
            {!isMobileMode && (
              <Typography asChild={true} variant={TypographyVariant.regular_text_16}>
                <span className={s.language}>Russian</span>
              </Typography>
            )}
          </div>
        </SelectItem>
        <SelectItem value={'English'}>
          <DynamicIcon
            iconId={'FlagUnitedKingdom'}
            width={20}
            viewBox={'0 0 24.5 20'}
            className={s.icon}
          />
          {!isMobileMode && (
            <Typography asChild={true} variant={TypographyVariant.regular_text_16}>
              <span className={s.language}>English</span>
            </Typography>
          )}
        </SelectItem>
      </Selector>
    )
  }
)

LanguageSelector.displayName = 'LanguageSelector'
