import { useMediaQuery, useTheme } from '@mui/material'

export const useMediaQueryHook = (breakPoint) => {
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down(breakPoint))
  const isMatchMd = useMediaQuery(theme.breakpoints.down('md'))

  return {
    isMatch,
    isMatchMd,
  }
}
