import { useRef, useState } from 'react'

type Element = HTMLInputElement | HTMLSelectElement

export const useHTMLElement = <T extends Element>(initial: string) => {
  const [value, setValue] = useState(initial)
  const ref = useRef<T>(null)

  const onChange = () => {
    if (!ref.current) return
    setValue(ref.current.value)
  }

  return {
    ref,
    onChange,
    get value() {
      return value
    },
    set value(value) {
      setValue(value)
    }
  }
}
