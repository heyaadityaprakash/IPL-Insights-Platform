import React from 'react';
import { Card, Typography } from '@mui/material';
const ChartCard = ({ title, children }) => (
  <Card sx={{ borderRadius: 3, p: 2 }}>
    <Typography fontWeight={600} mb={2}>
      {title}
    </Typography>
    {children}
  </Card>
);
export default ChartCard;