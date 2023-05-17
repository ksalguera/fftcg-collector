import { useMode } from '../../contexts/ThemeContext';

const SectionTitle = ({ title }) => {
  const [theme] = useMode();
  const themeColor = theme.palette.secondary.dark;

  return (
    <span style={{ color: themeColor }}>{title}</span>
  )
}

export default SectionTitle;