import { forwardRef, SelectHTMLAttributes } from 'react'
import { Label } from '@src/components/UI/Label'
import styles from './styles.css'

type Props = {
  options: {
    value: string,
    view?: string
  }[]
  label?: string
} & SelectHTMLAttributes<HTMLSelectElement>

export const Select = forwardRef<HTMLSelectElement, Props>((props, ref) => {
  const { label } = props
  return (
    <div className={styles.container}>
      {label && <Label>{label}</Label>}
      <select
        className={styles.select}
        {...props}
        ref={ref}
      >
        {props.options.map((i) =>
          <option
            key={i.value}
            value={i.value}
          >{i.view ?? i.value}</option>)}
      </select>
    </div>
  )
})
