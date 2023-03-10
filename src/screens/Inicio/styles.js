const container = (theme) => ({
  backgroundColor: '#fff',
  height: '100vh',
  pb: '3rem',
  [theme.breakpoints.down('md')]: {
    height: '200vh',
  }
})

const gridContainer = {
  height: '100vh',
  width: '100%',
  pt: '3rem',
  display: 'flex',
  justifyContent: 'center',
}

const esfera = {
  height: '30vh',
}

const infoContainer = (theme) => ({
  display: 'flex',
  alignItems: 'center',
  height: '50vh',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
})

const rectangle = {
  width: '0.5rem',
  height: '25vh',
  backgroundColor: '#ffff',
  m: '0 1rem'
}

const myName = (theme) => ({
  color: '#777777',
  fontWeight: '600',
  fontFamily: 'Poppins',
  fontSize: '70px',
  [theme.breakpoints.down('1500')]: {
    fontSize: '50px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '40px',
  },
  [theme.breakpoints.down('md')]: {
    width: '23rem',
  },
})

const myTitleConteiner = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const flor = (color, rotate) => ({
  backgroundColor: `#${color}`,
  position: 'absolute',
  width: '40%',
  height: '30%',
  borderRadius: '100%',
  transform: `rotate(${rotate}deg)`
})

const contactbtn = {
  backgroundColor: '#1ca99c',
  textTransform: 'capitalize',
  p: '8px 30px',
  fontFamily: 'Poppins',
  borderRadius: '20px',
  '&:hover': {
    backgroundColor: '#23B6A8',
  }
}

const styles = {
  container,
  rectangle,
  esfera,
  myName,
  gridContainer,
  infoContainer,
  myTitleConteiner,
  flor,
  contactbtn
}

export default styles