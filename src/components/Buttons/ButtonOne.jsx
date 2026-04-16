import { Button } from '@mui/material'
import React from 'react'

function ButtonOne({variant,disableElevation,title, onClick}) {
  return (
     <Button 
 
     style={{
      backgroundColor:'#e72020ee',
color:'white' 

     }}
     variant={variant} disableElevation={disableElevation} onClick={onClick}>
      {title}
    </Button>
  )
}

export default ButtonOne
