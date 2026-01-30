import React from 'react';  
import { Alert } from '@mui/material';

function Error({message}) {
    return ( <Alert severity="error">{message}</Alert> );
}

export default Error;