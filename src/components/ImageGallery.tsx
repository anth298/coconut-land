import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';

interface ImageGalleryProps {
  images: string[];
  title?: string;
  subtitle?: string;
  columns?: number;
  gap?: number;
  height?: number;
  borderRadius?: number;
  showTitle?: boolean;
  elevation?: number;
  hoverEffect?: boolean;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  title = 'Hình ảnh Bến Tre',
  subtitle,
  columns = 3,
  gap = 2,
  height = 200,
  borderRadius = 2,
  showTitle = true,
  elevation = 2,
  hoverEffect = true,
}) => {
  return (
    <Box sx={{ width: '100%', my: 3 }}>
      {showTitle && (
        <Box sx={{ mb: 3, textAlign: 'center' }}>
          <Typography variant="h5" component="h2" 
            sx={{ 
              color: '#1a1a2e', 
              fontWeight: 600, 
              mb: subtitle ? 1 : 3 
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#2C2A20', 
                mb: 3, 
                maxWidth: '800px', 
                mx: 'auto' 
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
      )}

      <Grid container spacing={gap}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={12 / columns} key={index}>
            <Paper
              elevation={elevation}
              sx={{
                height,
                borderRadius,
                overflow: 'hidden',
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                transition: 'all 0.4s ease',
                '&:hover': hoverEffect ? {
                  transform: 'scale(1.03)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                  '& .overlay': {
                    opacity: 0
                  }
                } : {},
              }}
            >
              <Box 
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%)',
                  transition: 'opacity 0.3s ease',
                }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ImageGallery; 