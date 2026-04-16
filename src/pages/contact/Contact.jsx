import React, { useState } from 'react';
import "./Contact.css";
import { FaEnvelope, FaPaperPlane, FaPhone } from 'react-icons/fa';
import { toast } from 'react-toastify';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Iltimos, barcha maydonlarni to'ldiring");
      return;
    }
    toast.success("Xabaringiz yuborildi!");
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className='Contact'>
      <div className="container">
        <Box className="kontakt-container">
          <Box className="kontakt-info-section">
            <Typography variant="h4" component="h1" className="page-title">
              Biz bilan bog'laning
            </Typography>
            
            <Box className="kontakt-sections">
              <Box className="kontakt-section">
                <Box className="section-header">
                  <Box className="icon-wrapper">
                    <FaPhone />
                  </Box>
                  <Typography variant="h6">Bizga qo'ng'iroq qiling</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Biz 24/7, 7 kun davomida mavjudmiz.
                </Typography>
                <Typography variant="body2" className="kontakt-info">
                  Telefon: +998901234567
                </Typography>
              </Box>

              <Box className="divider"></Box>

              <Box className="kontakt-section">
                <Box className="section-header">
                  <Box className="icon-wrapper">
                    <FaEnvelope />
                  </Box>
                  <Typography variant="h6">Yozing</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Formani to'ldiring va 24 soat ichida siz bilan bog'lanamiz.
                </Typography>
                <Typography variant="body2" className="kontakt-info">
                  Email: customer@exclusive.com
                </Typography>
                <Typography variant="body2" className="kontakt-info">
                  Email: support@exclusive.com
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box component="form" className="kontakt-form" onSubmit={handleSubmit}>
            <Typography variant="h5" component="h2" className="form-title">
              Xabar yuborish
            </Typography>
            
            <Box className="form-row">
              <TextField
                fullWidth
                variant="filled"
                label="Ismingiz"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                InputLabelProps={{ shrink: true }}
                sx={filledInputSx}
              />
            </Box>

            <Box className="form-row">
              <TextField
                fullWidth
                variant="filled"
                label="Emailingiz"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                InputLabelProps={{ shrink: true }}
                sx={filledInputSx}
              />
            </Box>

            <Box className="form-row">
              <TextField
                fullWidth
                variant="filled"
                label="Telefoningiz"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                InputLabelProps={{ shrink: true }}
                sx={filledInputSx}
              />
            </Box>

            <TextField
              fullWidth
              variant="filled"
              label="Xabar"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              sx={filledInputSx}
            />

            <Button 
              type="submit" 
              variant="contained" 
              className="submit-btn"
              endIcon={<FaPaperPlane />}
            >
              Xabar yuborish
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
}

const filledInputSx = {
  '& .MuiFilledInput-root': { 
    borderRadius: '0px',
    '&:before': { borderBottom: '2px solid #8a8787' },
    '&:hover:before': { borderBottom: '2px solid #000' },
    '&:before, &:after': { borderRadius: '0px' }
  }
};

export default Contact;