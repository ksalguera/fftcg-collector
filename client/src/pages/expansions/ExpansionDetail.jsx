import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import PageTitle from '../../components/PageTitle';
import Card from '../../components/Card';
import NotFound from '../resources/NotFound';

const ExpansionDetail = () => {
  const [expansion, setExpansion] = useState({});
  let { name } = useParams();

  useEffect(() => {
    const fetchCard = async () => {
      const res = await fetch(`/expansions/${name}`);
      if (!res.ok) throw new Error(res.statusText);
      const json = await res.json();
      setExpansion(json)
    }
    fetchCard()
  }, [name]);

  return (
    <>
      { expansion ? (
        <Box sx={{ flexDirection: 'column' }} className='container'> 
          <Stack direction='row' spacing={2} alignItems='baseline'>
            <PageTitle title={expansion.name} />
            <Typography variant='body1'>Released: {new Date(expansion.release_date).toLocaleDateString()}</Typography>
          </Stack>
          <Box mb={2} sx={{ height: 8, backgroundColor: 'neutral.main' }} />
          <Grid container spacing={2}> 
            { !expansion ? <CircularProgress /> :
              expansion.cards?.map(card => (
                <Grid key={card.name} sm={2}> 
                  <Card
                    name={card.name}
                    serial={card.serial}
                    image={card.image_url}
                    variants={card.variants}
                  />
                </Grid>
              ))
            }
          </Grid>
        </Box>
      ) : (
        <NotFound />
      )}
    </>
  )
}

export default ExpansionDetail;