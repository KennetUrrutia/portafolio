import { Box, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useStateCustomHook } from '../../hooks/main'
// import menus from '../../assets/Generales/menus.png'
// import menus_negro from '../../assets/Generales/menus_negro.png'
import styles from './styles'

export const DrawerComponent = ({ pages, blackOrWhiteIcon }) => {
  const { customTorF, halndleCustomTorF } = useStateCustomHook()
  return (
    <>
      <Drawer
        open={customTorF}
        anchor='right'
        onClick={() => halndleCustomTorF(false)}
      >
        <List>
          {
            pages.map((item, index) => (
              <ListItemButton key={index} to={item.to}>
                <ListItemIcon>
                  <ListItemText>
                    {item.name}
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))
          }
        </List>
      </Drawer>
      <IconButton
        onClick={() => halndleCustomTorF(!customTorF)}
      >
        <Box
          component='img'
          // src={blackOrWhiteIcon ? menus_negro : menus}
          sx={styles.menuIcon}
        />
      </IconButton>
    </>
  )
}
