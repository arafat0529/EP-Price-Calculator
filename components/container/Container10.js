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

const Container10 = () => {
  const [pcs, setPcs] = useState(0);
  const batteryKwh = 11;
  const [batteryTray, setBatteryTray] = useState(0);
  const [price, setPrice] = useState(0);
  const [installation, setInstallation] = useState(false);
  const [hvac, setHvac] = useState(0);
  const [auxKit, setAuxKit] = useState(true);
  const [fss, setFss] = useState(true);
  const [ats, setAts] = useState(true);
  const Container10ftPrice = 18000;
  const hvac3Ton = 11505;
  const pcsPrice = 200;
  const batteryPrice = 370;
  const installationPrice = 0;
  const auxKitPrice = 0;
  const fssPrice = 0;
  const atsPrice = 0;

  function instalationCalculate() {
    const numOfCabinent = batteryTray / 7;
    if (installation) {
      if (numOfCabinent >= 5) {
        installationPrice = 13500;
      } else if (numOfCabinent >= 3) {
        installationPrice = 12500;
      } else {
        installationPrice = 10500;
      }
    }
  }

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
  const handleAuxKitChange = (event) => {
    setAuxKit(!auxKit);
  };
  const handHVACChange = (event) => {
    setHvac(event.target.value);
  };

  function checkAuxKit() {
    if (auxKit) {
      auxKitPrice = 5500;
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
    instalationCalculate();
    checkAuxKit();
    checkFss();
    checkAts();
    setPrice(
      pcs * pcsPrice +
        batteryKwh * batteryPrice * batteryTray +
        auxKitPrice +
        fssPrice +
        atsPrice +
        installationPrice +
        Container10ftPrice +
        hvac3Ton * hvac
    );
  }, [pcs, batteryTray, installation, hvac, auxKit, ats, fss]);
  return (
    <div>
      <div>
        <FormControl required sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="pcs">PCS Quantity</InputLabel>
          <Select
            labelId="pcs"
            id="pcs"
            value={pcs}
            label="PCS Quantity"
            onChange={handlePCSChange}
          >
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={60}>60</MenuItem>
            <MenuItem value={90}>90</MenuItem>
            <MenuItem value={120}>120</MenuItem>
            <MenuItem value={150}>150</MenuItem>
            <MenuItem value={180}>180</MenuItem>
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
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={1}>1</MenuItem>
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
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={12}>12</MenuItem>
            <MenuItem value={13}>13</MenuItem>
            <MenuItem value={14}>14</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={18}>18</MenuItem>
            <MenuItem value={21}>21</MenuItem>
            <MenuItem value={24}>24</MenuItem>
            <MenuItem value={28}>28</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={36}>36</MenuItem>
            <MenuItem value={42}>42</MenuItem>
            <MenuItem value={45}>45</MenuItem>
          </Select>
        </FormControl>
        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={auxKit}
                onChange={handleAuxKitChange}
                name="auxKit"
              />
            }
            label="Aux Kit"
          />
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

export default Container10;
