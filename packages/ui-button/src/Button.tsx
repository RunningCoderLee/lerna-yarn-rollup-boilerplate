import type { PropsWithChildren } from 'react'

interface Props {
  type: 'primary' | 'default'
}

const Button = (props: PropsWithChildren<Props>) => {
  const { type } = props

  return <button type="button">{props.children}</button>
}

export default Button
