import React from 'react';
import { Alert } from '@mui/material';

function Empty({text}) {
    return ( <Alert severity="info">{text}</Alert> );
}

export default Empty;