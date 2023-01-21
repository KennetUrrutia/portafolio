import { AppBar, Box, Toolbar } from '@mui/material'
import { useLocationCustomHook, useMediaQueryHook } from '../../hooks/main'
import { DrawerComponent } from './Drawer'
import { DropdownMenu } from './DropdownMenu'
import { pages } from '../../data/pages'
import styles from './styles'

export const NavBar = () => {
  const { isMatch } = useMediaQueryHook('md')

  return (
    <AppBar position='fixed' elevation={0} sx={styles.appBar}>
      <Toolbar sx={styles.toolbarContainer}>
        {
          isMatch ? <DrawerComponent pages={pages} />
            :
            <Box sx={styles.navLiksContainer}>
              {pages.map(page => (
                <DropdownMenu key={page.name} {...page} />
              ))}
            </Box>
        }
      </Toolbar>
      {!isMatch && <hr style={{ borderRadius: '40%' }} />}
    </AppBar>
  )
}