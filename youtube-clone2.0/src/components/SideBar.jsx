//: Stack = wrapper MUI component
import { Stack } from '@mui/material';

//: Import Data form utils folder
import { categories } from '../components/utils/constants';


const SideBar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction='row'
    sx={{
      overflowY: 'auto',
      height: { sx: 'auto', md: '95%' },
      flexDirection: { md: 'column' },
    }}
  >
    {categories.map((category) => (
      <button
        className='category-btn'
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && '#FC1503',
          color: 'white',
        }}
        key={category.name}
      >
        <span style={{ 
          color: category.name === selectedCategory ? 'white' : 'red',
          marginRight: '15px'
        }}>{category.icon}</span>
        <span  style={{ 
          opacity: category.name === selectedCategory ? '1' : '0.8'
        }}>{category.name}</span>
      </button>
    ))}
  </Stack>
);
/** Component description
 *:: mapping in React
 *:: we have to give each property a key
 *:: key={category.name}
 *
 * 
 * + Repeat Template
 *:: style={{}}
 *:: sx={{}}
 *:: { sx: '', md: '' },
 *:: flexDirection:
 *:: marginRight:
 *:: className=''
 */

export default SideBar;
