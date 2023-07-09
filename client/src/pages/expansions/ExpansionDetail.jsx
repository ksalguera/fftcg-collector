import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Box, Button, CircularProgress, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import PageTitle from '../../components/PageTitle';
import Card from '../../components/Card';
import CircularProgressTimeout from '../../components/CircularProgressTimeout';

const ExpansionDetail = () => {
  const [expansion, setExpansion] = useState({});
  const [visible, setVisible] = useState(24);
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
            <Typography 
              variant='body1'>
                { expansion.release_date ? 
                  `Released: ${new Date(expansion.release_date).toLocaleDateString()}` : 
                  <CircularProgress />
                }
            </Typography>
          </Stack>
          <Box mb={2} sx={{ height: 8, backgroundColor: 'neutral.main' }} />
          <Grid container spacing={2}> 
            { !expansion ? <CircularProgress /> :
              expansion.cards?.slice(0, visible).map(card => (
                <Grid key={card.id} sm={2}> 
                  <Card
                    id={card.id}
                    name={card.name}
                    serial={card.serial}
                    image={card.image_url}
                    variants={card.variants}
                  />
                </Grid>
              ))
            }
          </Grid>
          <Box mt={2} sx={{ display: 'flex', justifyContent: 'center'}}>
            { visible !== expansion.cards?.length &&
              <Button variant='contained' onClick={() => setVisible(visible => visible + 24)}>Load More</Button>
            }
          </Box>
        </Box>
      ) : (
        <CircularProgressTimeout />
      )}
    </>
  )
}

export default ExpansionDetail;