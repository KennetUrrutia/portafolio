import { useState } from 'react'

export const useStateCustomHook = () => {
  const [customTorF, setCustomTorF] = useState(false)
  const [customString, setCustomString] = useState('')
  const [customNumber, setCustomNumber] = useState(0)

  const halndleCustomTorF = (value) => {
    setCustomTorF(value)
  }

  const handleCustomString = (value) => {
    setCustomString(value)
  }

  const handleCustomNumber = (value) => {
    setCustomNumber(value)
  }

  return {
    customTorF,
    halndleCustomTorF,
    customString,
    handleCustomString,
    customNumber,
    handleCustomNumber
  }
}
