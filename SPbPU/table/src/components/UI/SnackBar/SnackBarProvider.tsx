import { createContext, FC, ReactNode, useContext, useState } from 'react'
import { getId } from '@src/shared/utils/getId'
import { Snacks } from './Snacks'
import { SnackData, SnackType } from './types'

type Props = {
  children: ReactNode
}

export type Context = {
  pushSnack: (text: string, type?: SnackType) => void
}

const SnackBarContext = createContext<Partial<Context>>({})
export const useSnackBar = (): Context => useContext(SnackBarContext) as Context

export const SnackBarProvider: FC<Props> = ({ children }) => {
  const [snacks, setSnacks] = useState<SnackData[]>([])

  const pushSnack = (t: string, type: SnackType = 'info') => {
    snacks.push({
      id: getId(),
      text: t,
      added: new Date(),
      type
    })
    setSnacks([...snacks])
  }

  const deleteSnacks = (i: string[]) => {
    setSnacks(snacks.filter((s) => !i.includes(s.id)))
  }

  const updateSnacks = () => {
    const currSnacks = snacks.filter(({ added }) => +new Date() - +added < 5000)
    if (currSnacks.length === snacks.length) return
    setSnacks(currSnacks)
  }

  return (
    <SnackBarContext.Provider value={{
      pushSnack
    } as Context}
    >
      {snacks.length > 0 &&
        <Snacks
          snacks={snacks}
          deleteSnacks={deleteSnacks}
          updateSnacks={updateSnacks}
        />}
      {children}
    </SnackBarContext.Provider>
  )
}
