import { Box, Typography } from "@mui/material"
import styles from "./styles"

export const Contacto = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.contactContainer}>
        <Box sx={styles.titleContainer}>
          <Typography
            variant="h1"
            sx={styles.title}
          >Formulario de contacto</Typography>
        </Box>
      </Box>
    </Box>
  )
}
