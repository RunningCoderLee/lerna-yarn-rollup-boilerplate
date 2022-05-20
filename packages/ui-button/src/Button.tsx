import type { PropsWithChildren } from 'react'

interface Props {}

const Button = (props: PropsWithChildren<Props>) => {
  return <button>{props.children}</button>
}

export default Button
