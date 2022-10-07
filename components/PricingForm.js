import React, { useState } from 'react';
import {
  Paper,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  FormHelperText,
  Grid,
} from '@mui/material';
import Cabinet from './container/Cabinet';
import Container10 from './container/Container10';
import Container20 from './container/Container20';
import Container40 from './container/Container40';

const PricingForm = () => {
  const [containerType, setContainerType] = useState('');
  const handleChange = (event) => {
    setContainerType(event.target.value);
  };
  return (
    <div>
      <Typography alignItems="center" justify="center" variant="h4">
        Calculator
      </Typography>

      <FormControl required sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="container">Container Type</InputLabel>
        <Select
          labelId="container"
          id="container"
          value={containerType}
          label="Container Type"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Cabinent'}>Cabinent</MenuItem>
          <MenuItem value={'10ft-Containers'}>10ft Containers</MenuItem>
          <MenuItem value={'20ft-Containers'}>20ft Containers</MenuItem>
          <MenuItem value={'40ft-Containers'}>40ft Containers</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>

      {containerType === 'Cabinent' && <Cabinet />}
      {containerType === '10ft-Containers' && <Container10 />}
      {containerType === '20ft-Containers' && <Container20 />}
      {containerType === '40ft-Containers' && <Container40 />}
    </div>
  );
};

export default PricingForm;
