import { PropsWithChildren, useCallback } from 'react'
import clsx from 'clsx'
import { sayHelloTo } from '@lyrb/ui-utils'
import './style.css'

interface Props {
  type: 'primary' | 'default'
}

const Button = (props: PropsWithChildren<Props>) => {
  const { type } = props

  const classNames = clsx('btn', {
    'btn-primary': type === 'primary',
  })

  const handleClick = useCallback(() => {
    sayHelloTo('John')
  }, [])

  return (
    <button className={classNames} type="button" onClick={handleClick}>
      {props.children}
    </button>
  )
}

export default Button
