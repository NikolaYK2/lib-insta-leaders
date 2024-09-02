import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import s from './styles.module.scss'
import { Fragment } from 'react'
import { DynamicMenuItem, IconProps } from './dynamicMenuItem'

interface Trigger {
  img?: string
  icon?: 'more'
}

interface BaseItemSetting {
  title: string
  icon: IconProps
  disabled?: boolean
}

interface LinkItemSetting extends BaseItemSetting {
  route: string
  callback?: never
}

interface ButtonItemSetting extends BaseItemSetting {
  callback: () => void
  route?: never
}

export type ItemSetting = LinkItemSetting | ButtonItemSetting

export type Profile = {
  userName: string
  email?: string
  img?: string
  callback?: () => void
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
            type={el.route ? 'a' : 'button'}
            callback={el.callback || (() => {})}
            route={el.route || ''}
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
          {/*{trigger.icon && <Icon iconId={trigger.icon} width="24" height="24" viewBox="0 0 24 24"/>}*/}
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
              <DropdownMenu.Item className={s.Item}>
                <div className={s.profile} onClick={profile.callback}>
                  <img src={profile.img} alt={profile.img} />
                  <div>
                    <span className={s.userName}>{profile.userName}</span>
                    <span className={s.userEmail}>{profile.email}</span>
                  </div>
                </div>
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
