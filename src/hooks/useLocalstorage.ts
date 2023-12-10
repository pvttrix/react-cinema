import { useEffect, useState } from 'react'
import { LocalStorageTypes } from '../types/localstorage'

export function UseLocalStorage<T extends keyof LocalStorageTypes>(
  initialState: LocalStorageTypes[T],
  localStorageKey: T
) {
  const [value, setValue] = useState<LocalStorageTypes[T]>(() => {
    const storedValue = localStorage.getItem(localStorageKey)
    return storedValue ? JSON.parse(storedValue) : initialState
  })

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value))
  }, [value, localStorageKey])

  return [value, setValue] as const
}
