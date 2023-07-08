import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const CardFormVariants = ({ onEditVariant }) => {
  return (
    <>
      <FormControlLabel
        value={1}
        control={<Checkbox />}
        label='N'
        labelPlacement='start'
        onChange={onEditVariant}
      />
      <FormControlLabel
        value={2}
        control={<Checkbox />}
        label='NF'
        labelPlacement='start'
        onChange={onEditVariant}
      />
      <FormControlLabel
        value={3}
        control={<Checkbox />}
        label='S'
        labelPlacement='start'
        onChange={onEditVariant}
      />
      <FormControlLabel
        value={4}
        control={<Checkbox />}
        label='SF'
        labelPlacement='start'
        onChange={onEditVariant}
      />
      <FormControlLabel
        value={5}
        control={<Checkbox />}
        label='FA'
        labelPlacement='start'
        onChange={onEditVariant}
      />
      <FormControlLabel
        value={6}
        control={<Checkbox />}
        label='FAF'
        labelPlacement='start'
        onChange={onEditVariant}
      />
    </>
  )
}

export default CardFormVariants;