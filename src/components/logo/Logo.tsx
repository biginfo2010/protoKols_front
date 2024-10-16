import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/system';

export default function Logo({ sx }: { sx: SxProps<Theme> }) {
  return (
    <Box
      component="img"
      src="/logo/logo.png"  // Replace with the actual path to your logo
      alt="Logo"
      sx={sx}  // Using sx prop for styling
    />
  );
}