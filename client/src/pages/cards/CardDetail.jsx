import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import ReturnIcon from '@mui/icons-material/ArrowBack';
import PageTitle from '../../components/PageTitle';
import SectionTitle from './SectionTitle';
import CircularProgressTimeout from '../../components/CircularProgressTimeout';

const CardDetail = () => {
  let { serial } = useParams();
  const [card, setCard] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchCard = async () => {
      const res = await fetch(`/cards/${serial}`);
      if (!res.ok) {
        setCard(null)
      } else {
        const json = await res.json();
        setCard(json) 
      }
    }
    fetchCard().catch(error => error.message);
  }, [serial]);

  return (
    <>
      {card ? (
        <Box className='container'>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <Stack direction='row' justifyContent='space-between'>
            <Stack direction='row' spacing={2} alignItems='baseline'>
              <PageTitle title={card.name} />
              <Typography variant='body1'>{card.serial}</Typography>
            </Stack>
            <Button variant='text' startIcon={<ReturnIcon />} onClick={() => navigate('/browse-cards')}>Return to Card Browser</Button>
          </Stack>
            <Grid container spacing={2}>
              <Grid md={4} lg={4}>
                <img src={card.image_url} alt='card' style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
              </Grid>
              <Grid md={8} lg={8}>
                <Typography variant='body1'>
                  <SectionTitle title='Expansion: ' />{card.expansion.name} <br />
                  <SectionTitle title='Type: ' />{card.card_type} <br />
                  <SectionTitle title='Job: '/>{card.card_job} <br />
                  <SectionTitle title='Cost: ' />{card.cost === null ? 'None' : card.cost} <br />
                  <SectionTitle title='Power: ' />{card.power === null ? 'None' : card.power} <br />
                  <SectionTitle title='Collectible Variants: ' />{(card.variants && card.variants.length > 0) ? (
                    <>
                      {card.variants.map((variant, index) => (
                        <React.Fragment key={index}>
                          {variant.name}
                          {index !== card.variants.length - 1 && ', '}
                        </React.Fragment>
                      ))}
                    </>
                    ) : 'None'} <br />
                  <SectionTitle title='Collection Notes: ' />{card.note === null ? 'None' : card.note} <br />
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      ) : (
        <CircularProgressTimeout />
      )
      }
    </>
  )
}

export default CardDetail;