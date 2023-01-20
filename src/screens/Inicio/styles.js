const container = (image) => (theme) => ({
  height: '100vh',
  backgroundColor: '#1c1c1c',
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed'
})

const esfera = (theme) => ({
  width: '25rem',
  height: '25rem',
  // backdropFilter: 'invert(80%)'
})

const styles = {
  container,
  esfera
}

export default styles