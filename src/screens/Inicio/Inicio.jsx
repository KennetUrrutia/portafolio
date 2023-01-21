import { Box, Button, Grid, Typography } from '@mui/material'
import styles from './styles'
// import devBackground from '../../assets/devBackground.jpg'
import esfera from '../../assets/esfera.png'
import { useLocationCustomHook } from '../../hooks/useLocationCustomHook'

const crearFlor = () => {
  let mapIndex = ['AA', 'BB', 'CC', 'DD', 'FF', 'GG']

  return mapIndex.map((item, i) => (
    <Box
      key={item}
      className='animate__animated animate__zoomIn'
      sx={styles.flor((i % 2 == 0) ? '1ca99c' : 'f8af75', i * 30)} />
  ))
}

export const Inicio = () => {
  const {handleNavigate} = useLocationCustomHook()
  return (
    <Box sx={styles.container}>
      <Grid container sx={styles.gridContainer}>
        <Grid item md={5.5} xs={12} sx={styles.myTitleConteiner}>
          <Box sx={styles.infoContainer}>
            <Box
              component='img'
              className='animate__animated animate__rotateIn'
              src={esfera}
              sx={styles.esfera}
            />
            <Box
              className='animate__animated animate__backInDown'
              sx={styles.rectangle}
            />
            <Box>
              <Typography
                variant='h1'
                className='animate__animated animate__backInLeft'
                sx={styles.myName}
              >
                Kennet Alexander de León Urrutia
              </Typography>
              <Button
                variant='contained'
                sx={styles.contactbtn}
                onClick={() => handleNavigate('/contacto')}
              >
                Contácto
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item md={5.5} xs={12} sx={styles.myTitleConteiner}>
          {crearFlor()}
          <Typography
            variant='h1'
            sx={{ width: '45rem', color: '#fff', fontWeight: '600', textAlign: 'center', fontFamily: 'Poppins', fontSize: '60px' }}
            className='animate__animated animate__backInRight'
          >
            Desarrollador web Full Stack
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
