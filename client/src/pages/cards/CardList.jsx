import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { AppContext } from '../../contexts/AppContext';
import PageTitle from '../../components/PageTitle';
import CardSearchBar from './CardSearchBar';
import Card from '../../components/Card';

const CardList = () => {
  const { cards } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);
  
  const handleInputChange = e => setSearchValue(e.target.value.toLowerCase())
  const handleClear = () => setSearchValue('');

  const handleSubmit = e => {
    e.preventDefault();
  
    const filteredData = cards.filter(card => {
      return (
        card.name.toLowerCase().includes(searchValue) ||
        card.serial.toLowerCase().includes(searchValue) ||
        card.expansion.name.toLowerCase().includes(searchValue) ||
        card.card_job.toLowerCase().includes(searchValue) ||
        card.card_type.toLowerCase().includes(searchValue) ||
        card.power.toString().includes(searchValue) 
      )
    })
      
    setResults(filteredData)
  }

  return (
    <Box sx={{ flexDirection: 'column' }} className='container'>
      <PageTitle title='Browse Cards' />
      <CardSearchBar 
        searchValue={searchValue} 
        onHandleInputChange={handleInputChange} 
        onHandleSubmit={handleSubmit} 
        onHandleClear={handleClear}
      />
      <Typography variant='h3' mt={2} mb={1}>Search Results</Typography>
      <Grid container spacing={2}> 
        { results.length === 0 ? <Typography variant='body1' mt={2} ml={1}>Please Enter a Keyword</Typography> :
          results?.map(card => (
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
    </Box>
  )
}

export default CardList;