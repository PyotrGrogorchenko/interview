import { forwardRef, InputHTMLAttributes } from 'react'
import { Label } from '@src/components/UI/Label'
import styles from './styles.css'

type Props = { label?: string } & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label } = props
  return (
    <div className={styles.container}>
      {label && <Label>{label}</Label>}
      <input
        className={styles.input}
        {...props}
        ref={ref}
      />
    </div>
  )
})
