import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

interface Dish {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  ingredients: string[];
  where: string;
}

const dishes: Dish[] = [
  {
    id: 1,
    name: 'Kẹo dừa Bến Tre',
    description: 'Kẹo dừa Bến Tre là đặc sản nổi tiếng, được làm từ cơm dừa tươi ngon, đường và mạch nha, tạo nên hương vị đặc trưng không thể lẫn.',
    image: '/images/keo-dua.jpg',
    category: 'Đặc sản',
    ingredients: ['Cơm dừa', 'Đường', 'Mạch nha', 'Gừng'],
    where: 'Các cơ sở sản xuất kẹo dừa truyền thống tại Bến Tre'
  },
  {
    id: 2,
    name: 'Cá lóc nướng trui',
    description: 'Cá lóc nướng trui là món ăn dân dã nhưng đậm đà hương vị, được nướng trực tiếp trên than hồng cho đến khi vỏ ngoài cháy đen.',
    image: '/images/ca-loc-nuong.jpg',
    category: 'Món chính',
    ingredients: ['Cá lóc', 'Muối', 'Ớt', 'Lá chuối'],
    where: 'Các quán ăn dọc sông và nhà hàng đặc sản'
  },
  {
    id: 3,
    name: 'Bánh tráng dừa',
    description: 'Bánh tráng dừa là món ăn vặt độc đáo của Bến Tre, được làm từ bột gạo và cơm dừa nạo, tạo nên hương vị thơm ngon đặc trưng.',
    image: '/images/banh-trang-dua.jpg',
    category: 'Ăn vặt',
    ingredients: ['Bột gạo', 'Cơm dừa', 'Đường', 'Mè'],
    where: 'Các chợ địa phương và cửa hàng đặc sản'
  },
  {
    id: 4,
    name: 'Chuột đồng nướng',
    description: 'Chuột đồng nướng là món ăn đặc sản của vùng quê Bến Tre, thịt thơm ngon, dai và đậm đà.',
    image: '/images/chuot-dong.jpg',
    category: 'Món chính',
    ingredients: ['Chuột đồng', 'Sả', 'Ớt', 'Lá chanh'],
    where: 'Các quán nhậu địa phương'
  }
];

const CuisinePage = () => {
  return (
    <Box sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: '60vh',
          position: 'relative',
          backgroundImage: 'url(/images/ben-tre-cuisine.jpg)',
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
              Ẩm thực Bến Tre
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
              Khám phá hương vị đặc trưng của xứ dừa
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Cuisine Grid */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {dishes.map((dish, index) => (
            <Grid item xs={12} md={6} key={dish.id}>
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
                    image={dish.image}
                    alt={dish.name}
                  />
                  <CardContent>
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          backgroundColor: '#1a237e',
                          color: 'white',
                          px: 1,
                          py: 0.5,
                          borderRadius: 1
                        }}
                      >
                        {dish.category}
                      </Typography>
                    </Box>
                    <Typography variant="h5" gutterBottom sx={{ color: '#1a237e', fontWeight: 'bold' }}>
                      {dish.name}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {dish.description}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Nguyên liệu chính:
                      </Typography>
                      <Grid container spacing={1}>
                        {dish.ingredients.map((ingredient, i) => (
                          <Grid item xs={6} key={i}>
                            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                              • {ingredient}
                            </Typography>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Địa điểm thưởng thức:
                      </Typography>
                      <Typography variant="body2">
                        {dish.where}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Additional Information */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom sx={{ color: '#1a237e', fontWeight: 'bold' }}>
            Trải nghiệm ẩm thực độc đáo
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '800px', margin: '0 auto', mb: 4 }}>
            Bến Tre không chỉ nổi tiếng với những món ăn đặc sản mà còn là nơi bạn có thể trải nghiệm
            văn hóa ẩm thực độc đáo của vùng sông nước miền Tây.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CuisinePage; 