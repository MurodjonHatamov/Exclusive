import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import './CardSkleton.css';

function CardSkleton() {
  return (
    <div className="CardSkleton">
      <div className="skeleton-img">
        <Skeleton 
          variant="rectangular" 
          width="100%" 
          height="270px" 
          sx={{ borderRadius: '6px' }}
        />
      </div>
      <div className="skeleton-content">
        <Skeleton variant="text" width="86%" height="24px" />
        <Skeleton variant="text" width="50%" height="20px" />
        <Skeleton variant="text" width="30%" height="16px" />
      </div>
    </div>
  )
}

export default CardSkleton
