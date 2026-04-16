import React from 'react'

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

import { BiLogOut } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

function AcauntMenu({ userMenuActiv, setUserMenuActiv, getUser,setCartList, setWishlistData, setCartCount }) {
      const navigate = useNavigate();
     const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
   <>
   
    
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
             <FiUser  style={{ fontSize: '1.5rem' }}/>
          </IconButton>
     
     
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
   <Link to={"/myAccaunt"}>
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
   </Link>
        <Divider />

      
        <MenuItem onClick={()=>{
            handleClose();
                      localStorage.clear();
                      getUser();
                      navigate("/");
                      setUserMenuActiv(false);
                     setCartList(null)
                      setWishlistData(null)
                      setCartCount(null)
            

        }}    >
          <ListItemIcon>
              <BiLogOut />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      </>
  )
}


export default AcauntMenu











