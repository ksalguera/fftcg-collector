import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const CardFormVariants = ({ variants, onEditVariant }) => {
  return (
    <>
      <FormControlLabel
        value={1}
        control={<Checkbox />}
        label='N'
        labelPlacement='start'
        checked={variants?.length > 0 && variants.includes(1)}
        onChange={onEditVariant}
      />
      <FormControlLabel
        value={2}
        control={<Checkbox />}
        label='NF'
        labelPlacement='start'
        checked={variants?.length > 0 && variants.includes(2)}
        onChange={onEditVariant}
      />
      <FormControlLabel
        value={3}
        control={<Checkbox />}
        label='S'
        labelPlacement='start'
        checked={variants?.length > 0 && variants.includes(3)}
        onChange={onEditVariant}
      />
      <FormControlLabel
        value={4}
        control={<Checkbox />}
        label='SF'
        labelPlacement='start'
        checked={variants?.length > 0 && variants.includes(4)}
        onChange={onEditVariant}
      />
      <FormControlLabel
        value={5}
        control={<Checkbox />}
        label='FA'
        labelPlacement='start'
        checked={variants?.length > 0 && variants.includes(5)}
        onChange={onEditVariant}
      />
      <FormControlLabel
        value={6}
        control={<Checkbox />}
        label='FAF'
        labelPlacement='start'
        checked={variants?.length > 0 && variants.includes(6)}
        onChange={onEditVariant}
      />
    </>
  )
}

export default CardFormVariants;