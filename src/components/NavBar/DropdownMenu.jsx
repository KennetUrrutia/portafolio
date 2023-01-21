import { Menu } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useDropdownSettings } from '../../hooks/main'
import styles from './styles'

export const DropdownMenu = ({ to, name }) => {
  const { anchorEl, handleClose } = useDropdownSettings()

  return (
    <>
      <NavLink
        key={name}
        style={({ isActive }) => styles.navLink(isActive)}
        to={to}
      >
        {name}
      </NavLink>
      <Menu
        id='menu-appbar'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      </Menu>

    </>
  )
}
