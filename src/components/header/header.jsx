import React ,{useState} from 'react';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  InputBase, 
  Box, 
  Drawer,
  alpha 
} from '@mui/material';
import { 
  Menu, 
  Search as SearchIcon, 
 
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Ecurvy from '../../assets/Ecurvy.png';
import CategoryDrawer from '../Category/CategoryDrawer';
import { Link } from "react-router-dom";



import { PersonOutline, ShoppingBagOutlined } from '@mui/icons-material';


const StyledAppBar = styled(AppBar)({
  backgroundColor: 'white',
  height: 90,
     justifyContent: "center",  
  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1200,
});

const Logo = styled('div')({
  fontSize: '50px',
  fontWeight: 900,
  background: 'linear-gradient(45deg, #001F3F, #FFD700)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  marginLeft: '24px',
});

const SearchContainer = styled(Box)({
  flex: 1,
  maxWidth: '450px',
  margin: '0 24px',
});

const SearchInput = styled(InputBase)(({ theme }) => ({
  width: 470,                 // fixed width
  height: 48,                 // optional height
  border: '1px solid #001F3F', // 1px outline
  borderRadius: 18,
  padding: '0 20px',
  backgroundColor: 'transparent',  // remove fill

  input: {
    fontSize: '16px',
    padding: 0,
  },

  '&:hover': {
    borderColor: '#001F3F',
  },

  '&.Mui-focused': {
    border: '1px solid #001F3F',
  },
}));


const RightIcons = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '9px',
  marginRight: '22px',
  height: 25,
  width:29,
});

const IconBtn = styled(IconButton)({
  width: 30,
  height: 25,
  color: '#001F3F',
});
const LogoImg = styled('img')({
  height: 50,    
  width: 90,      
  marginLeft: '24px',  
  cursor: 'pointer',
  
});


const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpenDrawer(state);
  };
  return (
    <>
   <StyledAppBar>
  <Toolbar
    sx={{
      height: 120,
      minHeight: 120,
      px: 2,
      display: 'flex',
      justifyContent: 'space-between',   // <-- key
      alignItems: 'center',
       position: 'relative',   
    }}
  >
    {/* LEFT: Menu + Logo */}
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconBtn onClick={toggleDrawer(true)}>
        <Menu fontSize="large" />
      </IconBtn>
    <Link to="/" style={{   position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',}}>
  <LogoImg src={Ecurvy} alt="ASC logo" style={{ cursor: "pointer" }} />
</Link>

    </Box>

    {/* RIGHT: Search + Icons 
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,       // space between search and icons
        flexGrow: 1,  // lets search take available space if needed
        justifyContent: 'flex-end',
        ml: 4,        // optional margin if you want a bit of gap from logo
      }}
    >
      {/* Search 
      <SearchContainer>
        <SearchInput
          placeholder="Search products..."
          startAdornment={<SearchIcon sx={{ mr: 1, color: '#001F3F' }} />}
        />
      </SearchContainer>

       Icons 
     <RightIcons>
  <IconBtn>
    <PersonOutline />
  </IconBtn>
  <IconBtn>
    <ShoppingBagOutlined />
  </IconBtn>
</RightIcons>
    </Box>*/}
  </Toolbar>
</StyledAppBar>
 <CategoryDrawer
      open={openDrawer}
      onClose={toggleDrawer(false)}
    />

</>
  );
};

export default Header;
