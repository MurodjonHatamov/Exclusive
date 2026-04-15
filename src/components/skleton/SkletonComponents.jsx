import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function SkletonComponents({ variant = "rectangular", width = "100%", height = "100%" }) {
  if (variant === "text") {
    return (
      <Stack spacing={1}>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      </Stack>
    );
  }
  return (
    <Stack spacing={1}>
      <Skeleton variant={variant} width={width} height={height} />
    </Stack>
  );
}

export default SkletonComponents