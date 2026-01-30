import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const NavButton = ({ to, label }) => (
    <Button
      component={Link}
      to={to}
      sx={{
        color: 'white',
        textTransform: 'none',
        fontWeight: location.pathname === to ? 600 : 400,
        borderBottom: location.pathname === to ? '2px solid white' : 'none',
        borderRadius: 0,
      }}
    >
      {label}
    </Button>
  );

  return (
    <AppBar position="sticky" elevation={1}>
      <Toolbar sx={{ minHeight: 56, px: 2 }}>
   
        <Typography variant="h6" fontWeight={700}>
          IPL Insights
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

 
        <Box sx={{ display: 'flex', gap: 1 }}>
          <NavButton to="/" label="Home" />
          <NavButton to="/teams" label="Teams" />
          <NavButton to="/standings" label="Standings" />
          <NavButton to="/stats" label="Stats" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
