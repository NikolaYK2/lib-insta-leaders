import React from 'react'
import {Card} from '../card'
import {DynamicIcon} from '../icons'
import s from './style.module.scss'
import {clsx} from "clsx";

interface RecaptchaProps {
  checked: boolean
  setChecked: () => void
  loading: boolean
  expired: boolean
  error: boolean
  className: string
}

export const Recaptcha = ({
                            expired = false,
                            error = false,
                            checked = false,
                            loading = false,
                            setChecked,
                            className = '',
                          }: RecaptchaProps) => {
  return (
    <div className={error ? s.error : ''}>
      <Card className={clsx(s.wrapper, className)}>
        <div className={s.verificationBlock}>
          {expired && (
            <span className={s.errorText}>Verifiction expired. Check the checkbox again.</span>
          )}
          {loading ? (
            <div className={s.loader}></div>
          ) : (
            <>
              {checked ? (
                <DynamicIcon
                  width={24}
                  height={24}
                  iconId={'CheckmarkOutline'}
                  color={'#19983BE6'}
                />
              ) : (
                <input
                  type={'checkbox'}
                  checked={false}
                  onClick={() => setChecked()}
                  className={s.checkbox}
                />
              )}
            </>
          )}
          <span>I’m not a robot</span>
        </div>
        <DynamicIcon width={44} height={55} iconId={'ReCaotcha'}/>
      </Card>
      {error && <span className={s.errorText}>Please verify that you are not a robot</span>}
    </div>
  )
}
