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

const Container20 = () => {
  const [pcs, setPcs] = useState(0);
  const batteryKwh = 11;
  const [batteryTray, setBatteryTray] = useState(0);
  const [price, setPrice] = useState(0);
  const [installation, setInstallation] = useState(false);
  const [fss, setFss] = useState(true);
  const [ats, setAts] = useState(true);
  const [hvac, setHvac] = useState(1);
  const [hvacType, setHvacType] = useState(3);
  const Container20ftPrice = 65000;
  const hvac3Ton = 11505;
  const hvac6Ton = 19559;
  const hvacprice = 0;
  const pcsPrice = 120;
  const batteryPrice = 270;
  const installationPrice = 0;
  const fssPrice = 0;
  const atsPrice = 0;

  const handlePCSChange = (event) => {
    setPcs(event.target.value);
  };
  const handleBatteryTrayChange = (event) => {
    setBatteryTray(event.target.value);
  };
  const handleinstallationChange = (event) => {
    setInstallation(!installation);
  };
  const handleFssChange = (event) => {
    setFss(!fss);
  };
  const handleAtsChange = (event) => {
    setAts(!ats);
  };

  const handHVACChange = (event) => {
    setHvac(event.target.value);
  };
  const handHVACTypeChange = (event) => {
    setHvacType(event.target.value);
  };

  function setHvacPrice() {
    if (hvacType === 3) {
      hvacprice = hvac3Ton;
    } else {
      hvacprice = hvac6Ton;
    }
  }
  function checkInstallation() {
    if (installation) {
      installationPrice = 17500;
    }
  }
  function checkFss() {
    if (fss) {
      fssPrice = 2000;
    }
  }

  function checkAts() {
    if (ats) {
      atsPrice = 3500;
    }
  }

  useEffect(() => {
    setHvacPrice();
    checkInstallation();
    checkFss();
    checkAts();
    setPrice(
      pcs * pcsPrice +
        batteryKwh * batteryPrice * batteryTray +
        installationPrice +
        fssPrice +
        atsPrice +
        Container20ftPrice +
        hvacprice * hvac
    );
  }, [pcs, batteryTray, installation, hvac, hvacType, fss, ats]);
  return (
    <div>
      <div>
        <FormControl required sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="pcs">PCS Quantity</InputLabel>
          <Select
            labelId="pcs"
            id="pcs"
            value={pcs}
            label="PCS KW"
            onChange={handlePCSChange}
          >
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={250}>250</MenuItem>
            <MenuItem value={300}>300</MenuItem>
            <MenuItem value={350}>350</MenuItem>
            <MenuItem value={500}>500</MenuItem>
          </Select>
        </FormControl>
        <FormControl required sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="hvac">HVAC Type</InputLabel>
          <Select
            labelId="hvacType"
            id="hvacType"
            value={hvacType}
            label="HVAC Type"
            onChange={handHVACTypeChange}
          >
            <MenuItem value={3}>3 ton </MenuItem>
            <MenuItem value={6}>6 ton</MenuItem>
          </Select>
        </FormControl>
        <FormControl required sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="hvac">HVAC Quantity</InputLabel>
          <Select
            labelId="hvac"
            id="hvac"
            value={hvac}
            label="HVAC Quantity"
            onChange={handHVACChange}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
          </Select>
        </FormControl>
        <FormControl required sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="batteryTray">Battery Tray Quantity</InputLabel>
          <Select
            labelId="batteryTray"
            id="batteryTray"
            value={batteryTray}
            label="Battery Tray Quantity"
            onChange={handleBatteryTrayChange}
          >
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={52}>52</MenuItem>
            <MenuItem value={65}>65</MenuItem>
            <MenuItem value={78}>78</MenuItem>
            <MenuItem value={104}>104</MenuItem>
            <MenuItem value={120}>120</MenuItem>
          </Select>
        </FormControl>
        <div>
          <FormControlLabel
            control={
              <Checkbox checked={fss} onChange={handleFssChange} name="fss" />
            }
            label="FSS"
          />
          <FormControlLabel
            control={
              <Checkbox checked={ats} onChange={handleAtsChange} name="ats" />
            }
            label="ATS"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={installation}
                onChange={handleinstallationChange}
                name="installation"
              />
            }
            label="Installation"
          />
        </div>
      </div>
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

export default Container20;
