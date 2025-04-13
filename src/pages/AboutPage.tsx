import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const sections = [
    {
      title: 'Lịch sử',
      content: 'Bến Tre là tỉnh thuộc vùng đồng bằng sông Cửu Long, được thành lập từ năm 1822. Với bề dày lịch sử hơn 200 năm, Bến Tre tự hào là vùng đất của những người anh hùng và những truyền thống văn hóa độc đáo.',
      image: '/images/history.jpg'
    },
    {
      title: 'Địa lý',
      content: 'Nằm giữa hai nhánh sông Tiền và sông Ba Lai, Bến Tre được mệnh danh là "xứ dừa". Với diện tích tự nhiên 2.360 km², tỉnh có địa hình đặc trưng của vùng đồng bằng sông Cửu Long với nhiều sông ngòi, kênh rạch chằng chịt.',
      image: '/images/geography.jpg'
    },
    {
      title: 'Văn hóa',
      content: 'Bến Tre nổi tiếng với nền văn hóa đậm đà bản sắc dân tộc, được thể hiện qua các lễ hội truyền thống, nghệ thuật đờn ca tài tử, và các làng nghề truyền thống như đan lát, làm kẹo dừa.',
      image: '/images/culture.jpg'
    }
  ];

  return (
    <Box sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: '60vh',
          position: 'relative',
          backgroundImage: 'url(/images/ben-tre-about.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          mb: 8,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
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
              variant="h2"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                mb: 3,
                textAlign: 'center'
              }}
            >
              Về Bến Tre
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'white',
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              Khám phá vẻ đẹp của xứ dừa, nơi hội tụ tinh hoa văn hóa và thiên nhiên
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Content Sections */}
      <Container maxWidth="lg">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 4,
                mb: 4,
                borderRadius: 2,
                overflow: 'hidden'
              }}
            >
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6} order={{ xs: 2, md: index % 2 === 0 ? 1 : 2 }}>
                  <Typography variant="h4" gutterBottom sx={{ color: '#1a237e', fontWeight: 'bold' }}>
                    {section.title}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {section.content}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6} order={{ xs: 1, md: index % 2 === 0 ? 2 : 1 }}>
                  <Box
                    component="img"
                    src={section.image}
                    alt={section.title}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 2,
                      boxShadow: 3
                    }}
                  />
                </Grid>
              </Grid>
            </Paper>
          </motion.div>
        ))}

        {/* Additional Information */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" gutterBottom sx={{ color: '#1a237e', fontWeight: 'bold', textAlign: 'center' }}>
            Tại sao chọn Bến Tre?
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    height: '100%',
                    textAlign: 'center',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      transition: 'transform 0.3s ease-in-out'
                    }
                  }}
                >
                  <Typography variant="h6" gutterBottom sx={{ color: '#1a237e', fontWeight: 'bold' }}>
                    Thiên nhiên tươi đẹp
                  </Typography>
                  <Typography>
                    Khung cảnh sông nước hữu tình, những vườn dừa xanh mát và không khí trong lành.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    height: '100%',
                    textAlign: 'center',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      transition: 'transform 0.3s ease-in-out'
                    }
                  }}
                >
                  <Typography variant="h6" gutterBottom sx={{ color: '#1a237e', fontWeight: 'bold' }}>
                    Ẩm thực đặc sắc
                  </Typography>
                  <Typography>
                    Những món ăn đặc trưng của vùng sông nước, từ hải sản tươi ngon đến các món đặc sản từ dừa.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    height: '100%',
                    textAlign: 'center',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      transition: 'transform 0.3s ease-in-out'
                    }
                  }}
                >
                  <Typography variant="h6" gutterBottom sx={{ color: '#1a237e', fontWeight: 'bold' }}>
                    Con người thân thiện
                  </Typography>
                  <Typography>
                    Người dân Bến Tre nổi tiếng với sự mến khách, chân thành và nhiệt tình.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage; 