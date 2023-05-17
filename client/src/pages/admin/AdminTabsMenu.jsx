import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';

const VerticalTabsMenu = ({ value, handleChange }) => {
  const a11yProps = (index) => {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

  return (
    <Tabs
      orientation='vertical'
      variant='scrollable'
      value={value}
      onChange={handleChange}
      sx={{ borderRight: 1, borderColor: 'divider', minWidth: '15%' }}
    >
      <Tab label='Dashboard' {...a11yProps(0)} />
      <Tab label='Manage Users' {...a11yProps(1)} />
      <Tab label='Manage Sets' {...a11yProps(2)} />
      <Tab label='Manage Cards' {...a11yProps(3)} />
    </Tabs>
  );
}

VerticalTabsMenu.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default VerticalTabsMenu;