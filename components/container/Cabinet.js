import React, { useEffect, useState } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  OutlinedInput,
  InputAdornment,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

const Cabinet = () => {
  const [pcs, setPcs] = useState(0);
  const [battery, setBattery] = useState(0);
  const [price, setPrice] = useState(0);
  const [totalCapacity, setTotalCapacity] = useState(0);
  const [installation, setInstallation] = useState(false);
  const pcsPrice = 200;
  const batteryPrice = 370;
  let installationPrice = 0;

  const handlePCSChange = (event) => {
    setPcs(event.target.value);
  };
  const handleBatteryChange = (event) => {
    setBattery(event.target.value);
  };
  const handleinstallationChange = (event) => {
    setInstallation(!installation);
  };

  function calcInstallation() {
    if (battery <= 77) {
      installationPrice = 5000;
    } else {
      installationPrice = 6500;
    }
  }
  useEffect(() => {
    calcInstallation();
    if (installation) {
      setPrice(pcs * pcsPrice + battery * batteryPrice + installationPrice);
    } else {
      setPrice(pcs * pcsPrice + battery * batteryPrice);
    }
    setTotalCapacity(battery);
  }, [pcs, battery, installation]);
  return (
    <div>
      <div>
        <FormControl required sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="pcs">PCS KW</InputLabel>
          <Select labelId="pcs" id="pcs" value={pcs} label="PCS KW" onChange={handlePCSChange}>
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={60}>60</MenuItem>
          </Select>
        </FormControl>
        {pcs <= 30 ? (
          <FormControl required sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="battery">Battery Quantity</InputLabel>
            <Select
              labelId="battery"
              id="battery"
              value={battery}
              label="Battery Quantity"
              onChange={handleBatteryChange}
            >
              <MenuItem value={0}>0</MenuItem>
              <MenuItem value={66}>66</MenuItem>
              <MenuItem value={77}>77</MenuItem>
              <MenuItem value={143}>143</MenuItem>
              <MenuItem value={165}>165</MenuItem>
            </Select>
          </FormControl>
        ) : (
          <FormControl required sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="battery">Battery Quantity</InputLabel>
            <Select
              labelId="battery"
              id="battery"
              value={battery}
              label="Battery Quantity"
              onChange={handleBatteryChange}
            >
              <MenuItem value={0}>0</MenuItem>

              <MenuItem value={143}>143</MenuItem>
              <MenuItem value={165}>165</MenuItem>
            </Select>
          </FormControl>
        )}

        <div>
          <FormControlLabel
            control={<Checkbox checked={installation} onChange={handleinstallationChange} name="installation" />}
            label="Installation"
          />
        </div>
      </div>
      <div>
        <FormControl fullWidth>
          <InputLabel htmlFor="outlined-adornment-amount">Total Capacity</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={totalCapacity}
            endAdornment={<InputAdornment position="end">kwh</InputAdornment>}
            label="totalCapacity"
          />
        </FormControl>
      </div>
      <br></br>
      <div>
        <FormControl fullWidth>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={price}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
      </div>
    </div>
  );
};

export default Cabinet;
