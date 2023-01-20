import { useState } from 'react'
import { useLocationCustomHook } from './useLocationCustomHook'

export const useDropdownSettings = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const { handleNavigate } = useLocationCustomHook()

  const handleCloseAndNavigate = (to) => {
    handleNavigate(to)
    setAnchorEl(null)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  return {
    handleClose,
    handleCloseAndNavigate,
    anchorEl,
    handleMenu
  }
}
