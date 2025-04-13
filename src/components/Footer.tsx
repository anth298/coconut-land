import React from 'react';
import { Box, Container, Grid, Typography, Link, Paper, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { benTreImages } from '../assets/images';
import Logo from './Logo';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: '#111827',
        color: '#f3f4f6',
        py: 6,
        mt: 'auto',
        borderTop: '1px solid rgba(75, 85, 99, 0.3)',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${benTreImages.backgrounds[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.05,
          mixBlendMode: 'overlay',
          zIndex: 0,
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ mb: 3 }}>
              <Logo variant="auto" size="medium" />
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: '#d1d5db', mt: 2 }}>
                Khám phá vẻ đẹp xứ dừa - Nơi hội tụ của thiên nhiên, văn hóa và ẩm thực đặc sắc.
              </Typography>
            </Box>
            
            {/* Hình ảnh đại diện */}
            <Paper 
              elevation={3} 
              sx={{ 
                overflow: 'hidden', 
                borderRadius: 2,
                height: 160,
                backgroundImage: `url(${benTreImages.overview[0]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mb: 2,
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.03)'
                }
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ color: '#f9fafb', fontWeight: 600 }}>
              Liên kết
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Link 
                component={RouterLink} 
                to="/" 
                sx={{ 
                  textDecoration: 'none',
                  color: '#d1d5db',
                  transition: 'color 0.3s, transform 0.2s',
                  '&:hover': { 
                    color: '#f9fafb',
                    fontWeight: 500,
                    transform: 'translateX(3px)'
                  } 
                }}
              >
                Trang chủ
              </Link>
              <Link 
                component={RouterLink} 
                to="/about" 
                sx={{ 
                  textDecoration: 'none',
                  color: '#d1d5db',
                  transition: 'color 0.3s, transform 0.2s',
                  '&:hover': { 
                    color: '#f9fafb',
                    fontWeight: 500,
                    transform: 'translateX(3px)'
                  } 
                }}
              >
                Giới thiệu
              </Link>
              <Link 
                component={RouterLink} 
                to="/destinations" 
                sx={{ 
                  textDecoration: 'none',
                  color: '#d1d5db',
                  transition: 'color 0.3s, transform 0.2s',
                  '&:hover': { 
                    color: '#f9fafb',
                    fontWeight: 500,
                    transform: 'translateX(3px)'
                  } 
                }}
              >
                Điểm đến
              </Link>
              <Link 
                component={RouterLink} 
                to="/cuisine" 
                sx={{ 
                  textDecoration: 'none',
                  color: '#d1d5db',
                  transition: 'color 0.3s, transform 0.2s',
                  '&:hover': { 
                    color: '#f9fafb',
                    fontWeight: 500,
                    transform: 'translateX(3px)'
                  } 
                }}
              >
                Ẩm thực
              </Link>
              <Link 
                component={RouterLink} 
                to="/booking" 
                sx={{ 
                  textDecoration: 'none',
                  color: '#d1d5db',
                  transition: 'color 0.3s, transform 0.2s',
                  '&:hover': { 
                    color: '#f9fafb',
                    fontWeight: 500,
                    transform: 'translateX(3px)'
                  } 
                }}
              >
                Đặt phòng
              </Link>
            </Box>
            
            {/* Hình ảnh đại diện */}
            <Paper 
              elevation={3} 
              sx={{ 
                mt: 2,
                overflow: 'hidden', 
                borderRadius: 2,
                height: 95,
                backgroundImage: `url(${benTreImages.nature[0]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.03)'
                }
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ color: '#f9fafb', fontWeight: 600 }}>
              Liên hệ
            </Typography>
            <Typography variant="body2" paragraph sx={{ lineHeight: 1.8, color: '#d1d5db' }}>
              Địa chỉ: Số 7 Nguyễn Huệ, Phường 1, TP. Bến Tre
            </Typography>
            <Typography variant="body2" paragraph sx={{ lineHeight: 1.8, color: '#d1d5db' }}>
              Email: info@bentretourism.vn
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: '#d1d5db', mb: 2 }}>
              Điện thoại: (0275) 3829 333
            </Typography>
            
            {/* Hình ảnh đại diện */}
            <Paper 
              elevation={3} 
              sx={{ 
                overflow: 'hidden', 
                borderRadius: 2,
                height: 95,
                backgroundImage: `url(${benTreImages.cuisine[0]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.03)'
                }
              }}
            />
          </Grid>
        </Grid>

        {/* Dải hình ảnh Bến Tre */}
        <Stack 
          direction="row" 
          spacing={2} 
          sx={{ 
            mt: 4, 
            mb: 3,
            height: 90,
            overflow: 'hidden',
            borderRadius: 2,
          }}
        >
          {[
            ...benTreImages.destinations,
            ...benTreImages.culture,
            ...benTreImages.souvenirs
          ].slice(0, 6).map((img, index) => (
            <Paper
              key={index}
              elevation={2}
              sx={{
                flex: 1,
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            />
          ))}
        </Stack>
        
        <Box sx={{ mt: 3, pt: 3, textAlign: 'center', borderTop: '1px solid rgba(75, 85, 99, 0.2)' }}>
          <Typography variant="body2" sx={{ color: '#d1d5db', fontWeight: 500 }}>
            © {new Date().getFullYear()} Bến Tre Tourism. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 