import { Box, Button, Grid, Typography } from '@mui/material'
import styles from './styles'
// import devBackground from '../../assets/devBackground.jpg'
import esfera from '../../assets/esfera.png'

export const Inicio = () => {
  return (
    <Box sx={styles.container}>
      <Grid container sx={styles.gridContainer}>
        <Grid item md={5.5} xs={12} sx={styles.myTitleConteiner}>
          <Box sx={styles.infoContainer}>
            <Box
              component='img'
              src={esfera}
              sx={styles.esfera}
              className='animate__animated animate__rotateIn'
            />
            <Box
              sx={styles.rectangle}
              className='animate__animated animate__backInDown'
            />
            <Box>
              <Typography
                variant='h1'
                sx={styles.myName}
                className='animate__animated animate__backInLeft'
              >
                Kennet Alexander de León Urrutia
              </Typography>
              <Button variant='outlined'>
                Contácto
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item md={5.5} xs={12} sx={styles.myTitleConteiner}>
          <Box className='animate__animated animate__zoomIn' sx={{ backgroundColor: '#1ca99c', position: 'absolute', width: '40%', height: '30%', borderRadius: '100%' }} />
          <Box className='animate__animated animate__zoomIn' sx={{ backgroundColor: '#f8af75', position: 'absolute', width: '40%', height: '30%', borderRadius: '100%', transform: 'rotate(30deg)' }} />
          <Box className='animate__animated animate__zoomIn' sx={{ backgroundColor: '#1ca99c', position: 'absolute', width: '40%', height: '30%', borderRadius: '100%', transform: 'rotate(60deg)' }} />
          <Box className='animate__animated animate__zoomIn' sx={{ backgroundColor: '#f8af75', position: 'absolute', width: '40%', height: '30%', borderRadius: '100%', transform: 'rotate(90deg)' }} />
          <Box className='animate__animated animate__zoomIn' sx={{ backgroundColor: '#1ca99c', position: 'absolute', width: '40%', height: '30%', borderRadius: '100%', transform: 'rotate(120deg)' }} />
          <Box className='animate__animated animate__zoomIn' sx={{ backgroundColor: '#f8af75', position: 'absolute', width: '40%', height: '30%', borderRadius: '100%', transform: 'rotate(150deg)' }} />
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
