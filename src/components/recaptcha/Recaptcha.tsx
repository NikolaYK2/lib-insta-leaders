import React, {useEffect, useRef, useState} from 'react'
import {Card} from '../card'
import {DynamicIcon} from '../icons'
import s from './style.module.scss'
import {clsx} from "clsx";

interface RecaptchaProps {
  isVerified: boolean
  expired?: boolean
  error?: boolean
  className?: string
}

export const Recaptcha = ({
                            expired = false,
                            error = false,
                            isVerified = false,
                            className = '',
                          }: RecaptchaProps) => {

  const [isLoading, setIsLoading] = useState(false)
  const timerId = useRef<number | undefined>(undefined)

  useEffect(() => {
    if (isVerified) {
      setIsLoading(true)
      timerId.current = setTimeout(() => {
        setIsLoading(false)
      }, 2000)

    }

    return () => clearTimeout(timerId.current)

  }, [isVerified]);

  return (
    <div className={error ? s.error : ''}>
      <Card className={clsx(s.wrapper, className)}>
        <div className={s.verificationBlock}>
          {expired && (
            <span className={s.errorText}>Verifiction expired. Check the checkbox again.</span>
          )}
          {isLoading ? (
            <div className={s.loader}></div>
          ) : (
            <>
              {isVerified ? (
                <DynamicIcon
                  width={24}
                  height={24}
                  iconId={'CheckmarkOutline'}
                  color={'#19983BE6'}
                />
              ) : (
                <div className={s.box}/>
                // <input
                //   type={'checkbox'}
                //   defaultChecked={false}
                //   className={s.checkbox}
                // />
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
