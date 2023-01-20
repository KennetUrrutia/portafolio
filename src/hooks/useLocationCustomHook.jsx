import { useLocation, useNavigate, useParams } from 'react-router-dom'

export const useLocationCustomHook = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const params = useParams()

  const handleNavigate = (newLocation) => navigate(newLocation)

  return {
    handleNavigate,
    location,
    params
  }
}
