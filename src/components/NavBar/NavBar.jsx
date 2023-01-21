import { useEffect } from 'react'
import { AppBar, Box, Toolbar, Button } from '@mui/material'
import { useLocationCustomHook, useMediaQueryHook, useStateCustomHook } from '../../hooks/main'
import { DrawerComponent } from './Drawer'
import { DropdownMenu } from './DropdownMenu'
// import logo_sin_letras from '../../assets/Generales/logo_sin_letras.png'
// import semiagro_letras from '../../assets/Generales/semiagro_letras.png'
// import semiagro_letras_negras from '../../assets/Generales/semiagro_letras_negras.png'
import { pages } from '../../data/pages'
import styles from './styles'

export const NavBar = () => {
  const { isMatch } = useMediaQueryHook('md')
  const { handleNavigate, location } = useLocationCustomHook()
  const { customTorF, halndleCustomTorF } = useStateCustomHook()

  useEffect(() => {
    location.pathname !== '/' ?
      halndleCustomTorF(true)
      :
      halndleCustomTorF(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  return (
    <AppBar position='fixed' elevation={0} sx={styles.appBar}>
      <Toolbar sx={styles.toolbarContainer}>
        {
          isMatch ? <DrawerComponent pages={pages} blackOrWhiteIcon={customTorF} />
            :
            <Box sx={styles.navLiksContainer}>
              {pages.map(page => (
                <DropdownMenu key={page.name} {...page} customTorF={customTorF} />
              ))}
            </Box>
        }
      </Toolbar>
      {!isMatch && <hr style={{ borderRadius: '40%' }} />}
    </AppBar>
  )
}