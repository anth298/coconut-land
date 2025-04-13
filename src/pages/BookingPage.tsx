import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Rating,
  Snackbar,
  Alert
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { motion } from 'framer-motion';

interface Hotel {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  location: string;
  amenities: string[];
}

const hotels: Hotel[] = [
  {
    id: 1,
    name: 'Forever Green Resort',
    description: 'Resort sang trọng bên sông với không gian xanh mát, thiết kế hiện đại kết hợp với kiến trúc truyền thống.',
    image: '/images/forever-green.jpg',
    price: 1200000,
    rating: 4.5,
    location: 'Ấp 1, xã Sơn Đông, Bến Tre',
    amenities: ['Hồ bơi', 'Nhà hàng', 'Spa', 'WiFi miễn phí', 'Đưa đón sân bay']
  },
  {
    id: 2,
    name: 'Hàm Luông Hotel',
    description: 'Khách sạn 4 sao trong trung tâm thành phố, thuận tiện di chuyển đến các điểm du lịch.',
    image: '/images/ham-luong.jpg',
    price: 800000,
    rating: 4.0,
    location: 'Đại lộ Đồng Khởi, TP. Bến Tre',
    amenities: ['Phòng họp', 'Nhà hàng', 'Phòng gym', 'WiFi miễn phí']
  },
  {
    id: 3,
    name: 'Bến Tre Riverside Resort',
    description: 'Resort ven sông với view đẹp, không gian yên tĩnh thích hợp cho nghỉ dưỡng.',
    image: '/images/riverside.jpg',
    price: 1500000,
    rating: 4.8,
    location: 'Ấp 8, xã Mỹ Thạnh An, Bến Tre',
    amenities: ['Bãi biển riêng', 'Spa', 'Nhà hàng', 'Bar', 'Tour du lịch']
  }
];

const BookingPage = () => {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(1);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleBooking = (hotel: Hotel) => {
    setSelectedHotel(hotel);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSubmitBooking = () => {
    setOpenDialog(false);
    setOpenSnackbar(true);
    // Here you would typically handle the booking submission to a backend
  };

  return (
    <Box sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: '60vh',
          position: 'relative',
          backgroundImage: 'url(/images/ben-tre-hotel.jpg)',
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
              Đặt phòng khách sạn
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
              Trải nghiệm dịch vụ lưu trú tuyệt vời tại Bến Tre
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Hotels Grid */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {hotels.map((hotel, index) => (
            <Grid item xs={12} md={4} key={hotel.id}>
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
                    height="250"
                    image={hotel.image}
                    alt={hotel.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" gutterBottom sx={{ color: '#1a237e', fontWeight: 'bold' }}>
                      {hotel.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Rating value={hotel.rating} precision={0.5} readOnly />
                      <Typography variant="body2" sx={{ ml: 1 }}>
                        ({hotel.rating})
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      <strong>Địa điểm:</strong> {hotel.location}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {hotel.description}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Tiện nghi:
                      </Typography>
                      <Grid container spacing={1}>
                        {hotel.amenities.map((amenity, i) => (
                          <Grid item xs={6} key={i}>
                            <Typography variant="body2">• {amenity}</Typography>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="h6" color="primary">
                        {hotel.price.toLocaleString('vi-VN')}đ/đêm
                      </Typography>
                      <Button
                        variant="contained"
                        onClick={() => handleBooking(hotel)}
                        sx={{
                          backgroundColor: '#1a237e',
                          '&:hover': {
                            backgroundColor: '#0d47a1'
                          }
                        }}
                      >
                        Đặt ngay
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Booking Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Đặt phòng tại {selectedHotel?.name}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Ngày nhận phòng"
                  value={checkIn}
                  onChange={(newValue) => setCheckIn(newValue)}
                  sx={{ width: '100%' }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Ngày trả phòng"
                  value={checkOut}
                  onChange={(newValue) => setCheckOut(newValue)}
                  sx={{ width: '100%' }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Số khách</InputLabel>
                <Select
                  value={guests}
                  label="Số khách"
                  onChange={(e) => setGuests(Number(e.target.value))}
                >
                  {[1, 2, 3, 4].map((num) => (
                    <MenuItem key={num} value={num}>{num} người</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Số phòng</InputLabel>
                <Select
                  value={rooms}
                  label="Số phòng"
                  onChange={(e) => setRooms(Number(e.target.value))}
                >
                  {[1, 2, 3, 4].map((num) => (
                    <MenuItem key={num} value={num}>{num} phòng</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Ghi chú đặc biệt"
                multiline
                rows={4}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Hủy</Button>
          <Button
            onClick={handleSubmitBooking}
            variant="contained"
            sx={{
              backgroundColor: '#1a237e',
              '&:hover': {
                backgroundColor: '#0d47a1'
              }
            }}
          >
            Xác nhận đặt phòng
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Đặt phòng thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default BookingPage; 