import Stack from '@mui/material/Stack';
import { logo } from '../utils/constants';
import { Link } from 'react-router-dom';

import { SearchBar } from '../components/index.js';

const Header = () => {
  return (
    <Stack
      direction='row'
      alignItems="center"
      p={2}
      sx={{ position: 'sticky', background: '#000', top: '0', justifyContent: 'space-between' }}
    >
      <Link to='/'>
        <img src={logo} alt='logo-img' height={35} />
      </Link>

      <SearchBar />
    </Stack>
  )
}

export default Header