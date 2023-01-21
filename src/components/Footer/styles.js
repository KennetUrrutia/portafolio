const container = (theme) => ({
  width: '100%',
  height: '20rem',
  [theme.breakpoints.down('md')]:{
    height: '25rem',
  }
})

const topContainer = {
  backgroundColor: '#24242a',
  width: '100%',
  height: '77%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}



const centerContent = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
}

const linksContainer = (theme) => ({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  padding: '10px',
  justifyContent: 'space-around',
  [theme.breakpoints.down('md')]:{
    justifyContent: 'space-between',
  }
})

const navLinks = {
  textDecoration: 'none',
  color: 'white',
  fontFamily: 'Poppins',
  fontWeight: '400',
  fontSize: '16px',
  padding: '5px 10px',
  borderRadius: '2px',
  '&:hover':{
    backgroundColor: '#494949',
    cursor: 'pointer',
  }
}

const socialMediaIcon = {
  borderRadius: '100%',
  padding: '5px',
  backgroundColor: '#FFFFFF',
  margin: '0 1rem'
}

const bottomContainer = {
  width: '100%',
  height: '25%',
  backgroundColor: '#1c1c1c',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const bottomText = {
  color: '#5b5b5b',
  fontFamily: 'Poppins',
  fontSize: '16px'
}

const styles = {
  container,
  topContainer,
  centerContent,
  linksContainer,
  navLinks,
  socialMediaIcon,
  bottomContainer,
  bottomText
}

export default styles