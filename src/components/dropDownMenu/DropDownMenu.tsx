import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import s from './styles.module.scss'
import { Fragment } from 'react'
import { DynamicMenuItem } from './dynamicMenuItem'
import { IconId } from '../icons/DynamicIcon.tsx'
import { DynamicIcon } from '../icons'
import { Typography, TypographyVariant } from '../typography'

interface Trigger {
  img?: string
  icon?: IconId
}

interface BaseItemSetting {
  title: string
  icon: IconId
  disabled?: boolean
}

interface LinkItemSetting extends BaseItemSetting {
  href: string
  onClick?: never
}

interface ButtonItemSetting extends BaseItemSetting {
  onClick: () => void
  href?: never
}

export type ItemSetting = LinkItemSetting | ButtonItemSetting

export type Profile = {
  userName: string
  email?: string
  img?: string
  href?: string
}

export type DropDownMenuProps = {
  isArrow?: boolean
  trigger: Trigger
  profile?: Profile
  items: ItemSetting[]
}

export const DropDownMenu = (props: DropDownMenuProps) => {
  const { profile, trigger, isArrow, items } = props
  const itemList = items.map((el, i) => {
    return (
      <Fragment key={i}>
        <DropdownMenu.Item className={s.Item} asChild>
          <DynamicMenuItem
            title={el.title}
            icon={el.icon}
            type={el.href ? 'a' : 'button'}
            onClick={el.onClick || (() => {})}
            href={el.href || ''}
          />
        </DropdownMenu.Item>

        {i < items.length - 1 && <DropdownMenu.Separator className={s.Separator} />}
      </Fragment>
    )
  })

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={s.triggerButton} aria-label="Customise options">
          {trigger.icon && <DynamicIcon width={24} height={24} iconId={trigger.icon} />}
          {trigger.img && <img src={trigger.img} alt={trigger.img} />}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={s.Content}
          sideOffset={10}
          align={'end'}
          alignOffset={-6}
          style={profile && { marginTop: '4px' }}
        >
          {isArrow && <DropdownMenu.Arrow className={s.Arrow} />}
          {profile && (
            <>
              <DropdownMenu.Item asChild>
                <a className={s.profile} href={profile.href}>
                  <img src={profile.img} alt={profile.img} />
                  <div>
                    <Typography variant={TypographyVariant.regular_text_16} className={s.userName}>
                      {profile.userName}
                    </Typography>
                    <Typography variant={TypographyVariant.regular_text_16} className={s.userEmail}>
                      {profile.email}
                    </Typography>
                  </div>
                </a>
              </DropdownMenu.Item>
              <DropdownMenu.Separator className={s.Separator} />
              {itemList}
            </>
          )}
          {!profile && <> {itemList}</>}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
