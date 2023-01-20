import { Box, Link, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import styles from './styles'
import { pages } from '../../data/pages'

export const Footer = () => {

  return (
    <Box sx={styles.container}>
      <Box sx={styles.topContainer}>
        <Box sx={styles.centerContainer}>
          <Box sx={styles.centerContent}>
            <LinkedInIcon sx={styles.socialMediaIcon} />
            <InstagramIcon sx={styles.socialMediaIcon} />
            <GitHubIcon sx={styles.socialMediaIcon} />
          </Box>
          <Box sx={styles.linksContainer}>
            <PhoneIphoneIcon sx={styles.socialMediaIcon} />
            <Typography variant="body1">
              (+502) 4652-6279
            </Typography>
            <MailOutlineIcon sx={styles.socialMediaIcon} />
            <Typography variant="body1">
              kennetu200@gmail.com
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.bottomContainer}>
        <Typography variant='body1' sx={styles.bottomText}>
          © Kennet Alexander de León Urrutia 2022.
        </Typography>
      </Box>
    </Box>
  )
}
