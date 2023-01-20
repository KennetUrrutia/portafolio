const appBar = (theme) => ({
  background: 'none',
  // backdropFilter: 'invert(70%)',
  padding: '0 5rem',
  [theme.breakpoints.down('md')]: {
    padding: '0',
  }
})

const toolbarContainer = (theme) => ({
  display: 'flex',
  justifyContent: 'end',
  [theme.breakpoints.down('md')]: {
    padding: '0 0.5em'
  }
})

const completeLogo = {
  cursor: 'pointer',
  display: 'flex',
}

const logo = {
  height: '100%',
  mr: '10px',
}

const navLiksContainer = (theme) => ({
  width: '30rem',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  [theme.breakpoints.down('lg')]: {
    width: '70%',
  }
})

const navLink = (isActive) => ({
  width: '8rem',
  display: 'flex',
  justifyContent: 'center',
  padding: '10px',
  textDecoration: 'none',
  color: '#e1e1df',
  fontFamily: 'Poppins',
  fontWeight: isActive ? '700' : '600',
  display: 'flex',
  alignItems: 'center',
  border: isActive && '1px solid',
  backgroundColor: isActive && `rgba(174,182,181, 0.2)`
})

const menuIcon = {
  color: 'white',
  width: '2rem',
  height: '2rem',
}

const styles = {
  appBar,
  toolbarContainer,
  completeLogo,
  logo,
  navLiksContainer,
  navLink,
  menuIcon,
}

export default styles