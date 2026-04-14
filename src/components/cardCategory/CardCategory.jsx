import React from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
function CardCategory({ img, title }) {
  return (
  <Card sx={{ 
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: '8px',
    border: '1px solid rgba(0, 0, 0, 0.04)',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 0px 2px rgba(0,0,0,0.12)',
   
            
    }
  }}>
      <CardActionArea sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
         minWidth: 140,
    height: 140,
     padding: '20px',
      transition: 'all 0.3s ease',
      }}>
       <img src={img} alt={title} style={{
        width: 60,
        height: 60,
        objectFit: 'contain',
        marginBottom: '12px',
       }} />
         <Typography 
          gutterBottom 
          variant="h6" 
          component="div"
          className="category-title"
          sx={{
            fontSize: '14px',
            fontWeight: 500,
            color: '#333',
            transition: 'color 0.3s ease',
            textAlign: 'center',
            margin: 0
            
          }}
        >
      {title}   
        </Typography>
      </CardActionArea>
    </Card>
  )
}

export default CardCategory



