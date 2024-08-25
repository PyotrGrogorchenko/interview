import { createContext, FC, ReactNode, useContext, useRef, useState } from 'react'
import { Button } from '@src/components/UI/Button'
import { Modal } from '@src/components/UI/Modal'
import * as styles from './styles.css'

type Props = {
  children: ReactNode
}

type CB = (res: boolean) => void

export type Context = {
  showPrompt: (text: string, cb: CB) => void
}

const PromptContext = createContext<Partial<Context>>({})
export const usePrompt = (): Context => useContext(PromptContext) as Context

export const PromptProvider: FC<Props> = ({ children }) => {
  const [text, setText] = useState('')
  const savedCallback = useRef<CB>()

  const showPrompt = (t: string, cb: CB) => {
    savedCallback.current = cb
    setText(t)
  }

  const onCb = (answer: boolean) => {
    if (!savedCallback.current) return
    savedCallback.current(answer)
    setText('')
  }

  return (
    <PromptContext.Provider value={{
      showPrompt
    } as Context}
    >
      {text && <Modal zIndex='1000'>
        <div className={styles.container}>
          <div className={styles.text}>{text}</div>
          <div className={styles.actions}>
            <Button onClick={() => onCb(true)} glyph='yes'>Yes</Button>
            <Button onClick={() => onCb(false)} view='secondary' glyph='remove'>No</Button>
          </div>
        </div>
      </Modal>}
      {children}
    </PromptContext.Provider>
  )
}
