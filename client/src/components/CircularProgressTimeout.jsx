import { useState, useEffect } from 'react';
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
    <>
      {loading ? <CircularProgress /> : <NotFound />}
    </>
  )
}

export default CircularProgressTimeout;