import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import NotFound from '../pages/resources/NotFound';

const CircularProgressTimeout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timeOut)

  }, [])


  return (
    <Box className='container'>
      {loading ? <CircularProgress /> : <NotFound />}
    </Box>
  )
}

export default CircularProgressTimeout;