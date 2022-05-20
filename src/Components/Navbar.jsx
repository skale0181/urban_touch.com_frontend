import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { display, height } from '@mui/system';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/Login/action';
import { logout2 } from '../Redux/Signup/action';

const pages = ['MENS', 'WOMENS', 'KIDS', "GIFT-CARDS", "ABOUT US"];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


/////---------------------search bar-------------------/////
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    border: '1px solid gray',
    borderRadius:"40px",
    height:"30px",
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  //-----------------------------------------------//
 


const Navbar = () => {

  let navigate = useNavigate();
  const dispatch = useDispatch()
  const {token,name} = useSelector(state => state.login);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (link) => {
    setAnchorElNav(null);
    if(link=="MENS") navigate("/mens");
    if(link=="WOMENS") navigate("/womens");
    if(link=="KIDS") navigate("/kids");
    if(link=="GIFT-CARDS") navigate("/gift-cards");
    if(link=="ABOUT US") navigate("/about-us");
    if(link=="Cart") navigate("/cart");
  };

  const handleCloseUserMenu = (link) => {
    setAnchorElUser(null)
    if(link=="login")navigate("/login");
    if(link=="signup")navigate("/signup");
    // if(link=="profile")navigate("/profile");
    if(link=="logout"){
      dispatch(logout())
      dispatch(logout2())
      navigate("/");
    }
  };

  const handleNavigation = (link) => {
    if(link=="home")navigate("/");
  }

  return (
    <AppBar position="static" style={{color:"black", backgroundColor:"white" ,height:"60px" ,display:"flex",justifyContent:"center" , alignItems:"center", marginTop:"0px"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 600,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              // backgroundColor: 'gray',
              color: 'gold',
                borderRadius: '0.25rem',
                padding: '0.25rem',
            }}
          >
            URBANTOUCH.COM
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={()=>handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Button onClick={()=>handleNavigation("home")} style={{color:"black"}}>HOME</Button>
          </Box>
         
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 0,
              fontFamily: 'monospace',
              fontWeight: 600,
              fontSize: '0.8rem',
              letterSpacing: '.01rem',
              color: 'inherit',
              textDecoration: 'none',
              backgroundColor: 'gray',
              borderRadius: '0.25rem',
              padding: '0.25rem',
            }}
          >
            URBANTOUCH.COM
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',alignItems:"center" } }}>
              
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>handleCloseNavMenu(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
                style={{color:"black", backgroundColor:"white"}}
              >
                {page}
              </Button>
            ))}
            
             {/* <Tooltip title="Search" style={{height:"30%",}}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
             
            />
          </Search>
            </Tooltip> */}
          </Box>
          
         

          <Box sx={{ flexGrow: 0 ,display: { md: 'flex',display:"flex", justifyContent:"center", alignItems:"center", gap:"20px" }}}>
          <Tooltip title="Search" style={{height:"30%",}}>
          <Search >
            {/* <SearchIconWrapper >
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
             
            /> */}
          </Search>
            </Tooltip>
            <Tooltip title="cart" onClick={()=>navigate("/cart")}>  
           
          <ShoppingCartTwoToneIcon />
            </Tooltip >

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <PersonTwoToneIcon style={{color:"rgb(8,8,8)"}} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                <span style={{fontSize:"15px",wordSpacing:"5px"}}>{name?name:"Guest"}</span>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={()=>handleCloseUserMenu("null")}
            >
              {
              // settings.map((setting) => (
              //   <MenuItem key={setting} onClick={handleCloseUserMenu}>

              //     <Typography textAlign="center">{setting}</Typography>

              //   </MenuItem>
              // ))
             
              }
              { <MenuItem onClick={()=>{handleCloseUserMenu("signup")}}>
                  <Typography textAlign="center">Signup</Typography>
              </MenuItem>}
              {!token && <MenuItem onClick={()=>{handleCloseUserMenu("login")}}>
                  <Typography textAlign="center">Login</Typography>
              </MenuItem>}
              {/* {token && <MenuItem onClick={()=>{handleCloseUserMenu("profile")}}>
                  <Typography textAlign="center">Profile</Typography>
              </MenuItem>} */}
              {token && <MenuItem onClick={()=>{handleCloseUserMenu("logout")}}>
                  <Typography textAlign="center">Logout</Typography>
              </MenuItem>}

              
            </Menu>
          </Box>
          
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
