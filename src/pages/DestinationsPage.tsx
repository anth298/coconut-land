import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Tabs, Tab, Button } from '@mui/material';
import { motion } from 'framer-motion';

interface Destination {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  location: string;
  highlights: string[];
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Cồn Phụng',
    category: 'islands',
    description: 'Cồn Phụng là một trong những điểm du lịch nổi tiếng của Bến Tre, nơi lưu giữ di tích của đạo Dừa và nhiều hoạt động văn hóa đặc sắc.',
    image: '/images/con-phung.jpg',
    location: 'Huyện Châu Thành, Bến Tre',
    highlights: ['Di tích đạo Dừa', 'Vườn dừa xanh mát', 'Ẩm thực đặc sắc', 'Chèo thuyền khám phá']
  },
  {
    id: 2,
    name: 'Làng dừa Tam Hiệp',
    category: 'culture',
    description: 'Làng dừa Tam Hiệp là điểm đến lý tưởng để tìm hiểu về nghề làm dừa truyền thống và trải nghiệm cuộc sống miền sông nước.',
    image: '/images/lang-dua.jpg',
    location: 'Xã Tam Hiệp, Bến Tre',
    highlights: ['Tham quan vườn dừa', 'Học làm kẹo dừa', 'Đan lát từ dừa', 'Thưởng thức đặc sản']
  },
  {
    id: 3,
    name: 'Chợ nổi Cái Bè',
    category: 'culture',
    description: 'Chợ nổi Cái Bè là nơi giao thương truyền thống trên sông, mang đậm bản sắc văn hóa miền Tây Nam Bộ.',
    image: '/images/cho-noi.jpg',
    location: 'Sông Tiền, Bến Tre',
    highlights: ['Chợ nổi sáng sớm', 'Thuyền bán hàng', 'Ẩm thực đường sông', 'Chụp ảnh độc đáo']
  },
  {
    id: 4,
    name: 'Vườn trái cây Cái Mơn',
    category: 'nature',
    description: 'Vườn trái cây Cái Mơn nổi tiếng với nhiều loại trái cây nhiệt đới thơm ngon và không khí trong lành.',
    image: '/images/cai-mon.jpg',
    location: 'Huyện Chợ Lách, Bến Tre',
    highlights: ['Tham quan vườn trái cây', 'Hái trái cây tươi', 'Nghỉ dưỡng sinh thái', 'Ẩm thực miệt vườn']
  }
];

const DestinationsPage = () => {
  const [currentTab, setCurrentTab] = useState('all');

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  };

  const filteredDestinations = currentTab === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.category === currentTab);

  return (
    <Box sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: '60vh',
          position: 'relative',
          backgroundImage: 'url(/images/ben-tre-destinations.jpg)',
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
              Điểm đến hấp dẫn
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
              Khám phá những điểm đến tuyệt vời tại Bến Tre
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Filter Tabs */}
      <Container maxWidth="lg">
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            centered
            sx={{
              '& .MuiTab-root': {
                color: '#1a237e',
                '&.Mui-selected': {
                  color: '#1a237e',
                  fontWeight: 'bold'
                }
              }
            }}
          >
            <Tab label="Tất cả" value="all" />
            <Tab label="Đảo" value="islands" />
            <Tab label="Văn hóa" value="culture" />
            <Tab label="Thiên nhiên" value="nature" />
          </Tabs>
        </Box>

        {/* Destinations Grid */}
        <Grid container spacing={4}>
          {filteredDestinations.map((destination, index) => (
            <Grid item xs={12} md={6} key={destination.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                    height="300"
                    image={destination.image}
                    alt={destination.name}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom sx={{ color: '#1a237e', fontWeight: 'bold' }}>
                      {destination.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      <strong>Địa điểm:</strong> {destination.location}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {destination.description}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Điểm nổi bật:
                      </Typography>
                      <Grid container spacing={1}>
                        {destination.highlights.map((highlight, i) => (
                          <Grid item xs={6} key={i}>
                            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                              • {highlight}
                            </Typography>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                    <Button
                      variant="contained"
                      sx={{
                        mt: 2,
                        backgroundColor: '#1a237e',
                        '&:hover': {
                          backgroundColor: '#0d47a1'
                        }
                      }}
                    >
                      Xem chi tiết
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default DestinationsPage; 