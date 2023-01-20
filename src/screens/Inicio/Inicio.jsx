import { Box, Typography } from "@mui/material"
import styles from "./styles"
import devBackground from '../../assets/devBackground.jpg'
import esfera from '../../assets/esfera.png'

export const Inicio = () => {
  return (
    <Box sx={styles.container(devBackground)}>
      <Box 
        component='img'
        src={esfera}
        sx={styles.esfera}
      />
      <Typography variant="body1">
        Kennet Alexander de León Urrutia
      </Typography>
    </Box>
  )
}
