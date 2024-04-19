import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function ProgressBar(props) {
           let {value}={...props}
  return (
   value>0?( <Box position="relative" display="inline-flex">
      <CircularProgress variant="static" {...props} />
      <Box
        top={0}
        left={0}
        padding='5px'
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
      <Typography variant="caption" component="div" color="textSecondary">{
        `${value}%`}</Typography>   
      </Box>
    </Box>):null
  );
}




  