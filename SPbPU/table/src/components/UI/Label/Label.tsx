import { forwardRef, LabelHTMLAttributes, ReactNode } from 'react'
import * as styles from './styles.css'

type Props = { children?: ReactNode } & LabelHTMLAttributes<HTMLLabelElement>

export const Label = forwardRef<HTMLLabelElement, Props>((props, ref) => {
  return (
    <label
      className={styles.label}
      {...props}
      ref={ref}
    >{props.children}</label>
  )
})
