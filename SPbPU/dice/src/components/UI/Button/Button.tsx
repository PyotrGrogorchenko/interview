import { ButtonHTMLAttributes, FC } from 'react'
import { Glyph } from '@src/types'
import { Icon } from '@src/components/UI/Icon'
import * as styles from './styles.css'

type Props = {
  glyph?: Glyph
  view?: 'primary' | 'secondary'
  active?: boolean
  undress?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<Props> = (props) => {
  const {
    glyph,
    view = 'primary',
    children,
    ...rest
  } = props
  return (
    <>
      <button
        className=
          {
            `${styles.button}
            ${styles[view + '_view']}`
          }
        {...rest}>
        {glyph && <Icon glyph={glyph}/>}
        {children}
      </button>
    </>
  )
}
