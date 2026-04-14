import React, { useState } from 'react'
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

function IconButtonLoading({icon, onClick}) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      if (onClick) await onClick();
    } finally {
      setTimeout(() => setLoading(false), 500);
    }
  };
  return (
 <Tooltip title="Click to see loading">
  <IconButton onClick={handleClick} loading={loading}>
   {icon}
  </IconButton>
</Tooltip>
  )
}

export default IconButtonLoading
