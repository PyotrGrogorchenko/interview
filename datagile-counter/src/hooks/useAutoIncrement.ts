import { useTypedSelector } from "./useTypedSelector"
import { useAction } from "./useAction"
import { useEffect, useState } from "react"

export const useAutoIncrement = () => {
    const { autoIncrement } = useTypedSelector((state) => state.counter)
    const { setCounter } = useAction()
    const [tick, setTick] = useState(false)

    useEffect(() => {
        setInterval(() => {
            setTick((prev) => !prev)            
        }, 1000)
    }, [])

    useEffect(() => {
        setCounter(autoIncrement.reduce((r, id) => {
            r.push({ id, value: 1 })
            return r
        }, []))
    }, [tick])
}
