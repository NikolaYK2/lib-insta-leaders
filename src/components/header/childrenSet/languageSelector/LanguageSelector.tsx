import { ElementRef, forwardRef } from 'react'
import * as Select from '@radix-ui/react-select'
import { SelectItem, Selector } from '../../../select/Select.tsx'
import s from './languageSelector.module.scss'
import { DynamicIcon } from '../../../icons'
import { Typography, TypographyVariant } from '../../../typography'

export type LanguageSelectorProps = {
  onValueChange?: (value: string) => void
}

export const LanguageSelector = forwardRef<ElementRef<typeof Select.Root>, LanguageSelectorProps>(
  ({ onValueChange }: LanguageSelectorProps, forwardedRef) => {
    return (
      <Selector
        defaultValue={'Russian'}
        className={s.selector}
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
            <Typography asChild={true} variant={TypographyVariant.regular_text_16}>
              <span className={s.language}>Russian</span>
            </Typography>
          </div>
        </SelectItem>
        <SelectItem value={'English'}>
          <DynamicIcon
            iconId={'FlagUnitedKingdom'}
            width={20}
            viewBox={'0 0 24.5 20'}
            className={s.icon}
          />
          <Typography asChild={true} variant={TypographyVariant.regular_text_16}>
            <span className={s.language}>English</span>
          </Typography>
        </SelectItem>
      </Selector>
    )
  }
)

LanguageSelector.displayName = 'LanguageSelector'
