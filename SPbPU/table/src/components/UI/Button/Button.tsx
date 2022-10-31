import { ButtonHTMLAttributes, FC } from 'react'
import { Glyph } from '@src/types'
import { Icon } from '@src/components/UI/Icon'
import styles from './styles.css'

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
    active = false,
    undress = false,
    children,
    ...rest
  } = props
  return (
    <>
      <button
        className=
          {
            `${styles.button}
            ${styles[view + '_view']}
            ${active ? styles[view + '_active'] : ''}
            ${undress ? styles.undress : ''}`
          }
        {...rest}>
        {glyph && <Icon glyph={glyph}/>}
        {children}
      </button>
    </>
  )
}
