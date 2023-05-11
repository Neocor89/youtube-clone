import { useState } from 'react';

//:: Navigation actions ::
import { useNavigate } from 'react-router-dom';

import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }

  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5},
        width: { xs: '215px', md: "500px" },
        display: { xs: 'flex' },
        justifyContent: 'space-between',
        marginLeft: { xs: 2 },
        
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: '10px', color: 'red', height: { xs: '30px', md: "40px" } }}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar