import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import PageTitle from '../../components/PageTitle';
import ResourceCard from './ResourceCard';

const Resources = () => {
  return (
    <Box className='container' sx={{ width:'100%' }}>
      <Stack sx={{ width: '100%' }}>
        <PageTitle title='Resources' />
        <Paper sx={{ mb: 2, p: 2, width: '100%' }}>
          <Grid container rowSpacing={2} columnSpacing={10}>
            <ResourceCard
              title='Official Final Fantasy TCG Website'
              description='Learn the official game rules, game news, upcoming sets, and more.'
              link='https://fftcg.square-enix-games.com/na'
            />
            <ResourceCard
              title='Official Square Enix Website'
              description='Find all things related to Square Enix, including games and merchandise.'
              link='https://www.square-enix-games.com/en_US/home'
            />
            <ResourceCard
              title='FF Decks'
              description='Build FFTCG decks, follow tournaments, browse cards, and more.'
              link='https://ffdecks.com/'
            />
            <ResourceCard
              title='TCG Player'
              description='Buy TCG cards from reputable sellers.'
              link='https://www.tcgplayer.com/'
            />
            <ResourceCard
              title='FFTCG North America FaceBook Group'
              description='Buy FFTCG cards from reputable sellers, typically at lower prices than TCG Player.'
              link='https://www.facebook.com/groups/625543084274349'
            />
            <ResourceCard
              title='FFTCG Marketplace FaceBook Group'
              description='Connect with the FFTCG community on FaceBook.'
              link='https://www.facebook.com/groups/1065299426884865'
            />
          </Grid>
        </Paper>
      </Stack>
    </Box>
  )
}

export default Resources;