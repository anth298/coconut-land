import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';

const HomePage = () => {
  const highlights = [
    {
      title: 'Cồn Phụng',
      image: '/images/con-phung.jpg',
      description: 'Khám phá vẻ đẹp hoang sơ của cồn Phụng, nơi lưu giữ di tích lịch sử và văn hóa độc đáo.'
    },
    {
      title: 'Làng dừa Tam Hiệp',
      image: '/images/lang-dua.jpg',
      description: 'Trải nghiệm cuộc sống miền sông nước và tìm hiểu về nghề làm dừa truyền thống.'
    },
    {
      title: 'Chợ nổi Cái Bè',
      image: '/images/cho-noi.jpg',
      description: 'Khám phá nét văn hóa độc đáo của chợ nổi miền Tây trên dòng sông Tiền.'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '80vh',
          position: 'relative',
          backgroundImage: 'url(/images/ben-tre-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: { xs: '2.5rem', md: '4rem' },
                mb: 2
              }}
            >
              BẾN TRE
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: 'white',
                mb: 4,
                fontSize: { xs: '1.5rem', md: '2rem' }
              }}
            >
              Xứ dừa thân thiện và mến khách
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#1a237e',
                '&:hover': {
                  backgroundColor: '#0d47a1'
                }
              }}
            >
              Khám phá ngay
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Highlights Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          align="center"
          sx={{ mb: 6, fontWeight: 'bold', color: '#1a237e' }}
        >
          Điểm đến nổi bật
        </Typography>
        <Grid container spacing={4}>
          {highlights.map((highlight, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      transition: 'transform 0.3s ease-in-out'
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={highlight.image}
                    alt={highlight.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                      {highlight.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {highlight.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action Section */}
      <Box
        sx={{
          backgroundColor: '#f5f5f5',
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h4" gutterBottom sx={{ color: '#1a237e', fontWeight: 'bold' }}>
                  Khám phá Bến Tre ngay hôm nay
                </Typography>
                <Typography variant="body1" paragraph>
                  Đặt tour du lịch và trải nghiệm những điều tuyệt vời nhất tại xứ dừa Bến Tre.
                  Chúng tôi cam kết mang đến cho bạn những trải nghiệm đáng nhớ nhất.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: '#1a237e',
                    '&:hover': {
                      backgroundColor: '#0d47a1'
                    }
                  }}
                >
                  Đặt tour ngay
                </Button>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  component="img"
                  src="/images/ben-tre-cta.jpg"
                  alt="Bến Tre landscape"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: 3
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage; 