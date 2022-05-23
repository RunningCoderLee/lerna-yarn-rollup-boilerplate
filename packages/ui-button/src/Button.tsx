import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import './style.css'

interface Props {
  type: 'primary' | 'default'
}

const Button = (props: PropsWithChildren<Props>) => {
  const { type } = props

  const classNames = clsx('btn', {
    'btn-primary': type === 'primary',
  })

  return (
    <button className={classNames} type="button">
      {props.children}
    </button>
  )
}

export default Button
