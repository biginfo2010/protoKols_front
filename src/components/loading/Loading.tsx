import { useState, useEffect } from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import Logo from '../logo/Logo';

export default function SplashScreen({ sx, ...other }: BoxProps) {
  const [rotation, setRotation] = useState(0); // State for rotation

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1); // Increase rotation by 5 degrees every 10ms
    }, 1);

    return () => {
      clearInterval(rotationInterval); // Cleanup rotation interval
    };
  }, []);

  return (
    <Box
      sx={{
        right: 0,
        width: 1,
        bottom: 0,
        height: 1,
        zIndex: 9998,
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url("/background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        ...sx,
      }}
      {...other}
    >
      {/* Logo with real-time rotation and scale */}
      <Box
        sx={{
          transform: `rotate(${rotation}deg)`, // Apply both rotation and scaling dynamically
          transition: 'transform 100ms linear', // Smooth transition for both rotation and scaling
        }}
      >
        <Logo sx={{ width: 720, height: 600 }} />
      </Box>
    </Box>
  );
}
