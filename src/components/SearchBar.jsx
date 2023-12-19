import { Paper, IconButton } from "@mui/material"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => { }}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        boxShadow: 'none',
        pl: 3,

      }}
    >
      <input
        // value=""
        onChange={() => { }}
        className="search-bar"
        type=" text"
        placeholder="Search..."
      />
      <IconButton sx={{ border: '2px solid #e3e3e3' }}>
        <SearchOutlinedIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchBar