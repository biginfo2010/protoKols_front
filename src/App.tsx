import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Loading from './components/loading/Loading';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5-second delay for loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      {loading ? (
        <Loading />
      ) : (
        <h1>Welcome to ProtoKOLS</h1>
      )}
    </Box>
  );
}
