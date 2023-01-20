import { Menu, MenuItem } from '@mui/material'
import { NavLink } from 'react-router-dom'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useDropdownSettings } from '../../hooks/main'
import styles from './styles'

export const DropdownMenu = (props) => {
  const { subPages, to, name } = props
  const { anchorEl, handleClose, handleCloseAndNavigate, handleMenu } = useDropdownSettings()

  return (
    <>
      <NavLink
        key={name}
        style={({ isActive }) => styles.navLink(isActive)}
        onClick={subPages && handleMenu}
        to={!subPages && to}
      >
        {name} {subPages && <ExpandMoreIcon />}
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
        {subPages &&
          subPages.map(subPage => (
            <MenuItem
              key={subPage.name}
              onClick={() => handleCloseAndNavigate(subPage.to)}
            >
              {subPage.name}
            </MenuItem>
          ))
        }
      </Menu>

    </>
  )
}
