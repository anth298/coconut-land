import React from 'react';
import { Box } from '@mui/material';

interface BackgroundImageProps {
  src: string;
  opacity?: number;
  blur?: number;
  children?: React.ReactNode;
  fixed?: boolean;
  overlay?: boolean;
  overlayColor?: string;
  height?: string | number;
  zIndex?: number;
  borderRadius?: string | number;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  src,
  opacity = 1,
  blur = 0,
  children,
  fixed = false,
  overlay = true,
  overlayColor = 'rgba(0, 0, 0, 0.4)',
  height = '100%',
  zIndex = 0,
  borderRadius = 0,
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        height,
        borderRadius,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: fixed ? 'fixed' : 'scroll',
          opacity,
          filter: blur > 0 ? `blur(${blur}px)` : 'none',
          zIndex,
        }}
      />
      
      {overlay && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: overlayColor,
            zIndex: zIndex + 1,
          }}
        />
      )}
      
      <Box
        sx={{
          position: 'relative',
          height: '100%',
          zIndex: zIndex + 2,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default BackgroundImage; 