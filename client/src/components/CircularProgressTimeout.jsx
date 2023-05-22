import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import PageTitle from './PageTitle';

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
      {loading ? <CircularProgress /> : <PageTitle title='404 - Not Found' />}
    </Box>
  )
}

export default CircularProgressTimeout;