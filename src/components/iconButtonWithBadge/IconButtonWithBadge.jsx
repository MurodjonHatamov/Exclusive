import React from 'react'
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

function IconButtonWithBadge({ number, icon }) {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      top: -9,
      right: -3,
      minWidth: '20px',
      height: '20px',
      fontSize: '11px',
      fontWeight: 700,
      color: '#fff',
      background:'  red',
      borderRadius: '10px',

    },
  }));

  return (
    <IconButton
      aria-label="cart"
    >
      {icon}
      <StyledBadge
        badgeContent={number > 99 ? '99+' : number}
        sx={{
          '& .MuiBadge-badge': {
            display: number > 0 ? 'flex' : 'none',
          },
        }}
      />
    </IconButton>
  );
}

export default IconButtonWithBadge;
