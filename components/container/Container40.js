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

const Container40 = () => {
  const [pcs, setPcs] = useState(0);
  const batteryKwh = 11;
  const [batteryTray, setBatteryTray] = useState(0);
  const [price, setPrice] = useState(0);
  const [installation, setInstallation] = useState(false);
  const [hvac, setHvac] = useState(1);
  const [hvacType, setHvacType] = useState(3);
  const [batteryTrayType, setBatteryTrayType] = useState(27);
  const Container40ftPrice = 80000;
  const hvac3Ton = 11505;
  const hvac6Ton = 19559;
  const hvacprice = 0;
  const pcsPrice = 120;
  const batteryPrice = 270;
  const installationPrice = 30000;

  const handlePCSChange = (event) => {
    setPcs(event.target.value);
  };

  const handleinstallationChange = (event) => {
    setInstallation(!installation);
  };

  const handleHVACChange = (event) => {
    setHvac(event.target.value);
  };
  const handleHVACTypeChange = (event) => {
    setHvacType(event.target.value);
  };

  const handleBatteryTrayChange = (event) => {
    setBatteryTray(event.target.value);
  };
  const handleBatteryTrayTypeChange = (event) => {
    setBatteryTrayType(event.target.value);
  };

  function setHvacPrice() {
    if (hvacType === 3) {
      hvacprice = hvac3Ton;
    } else {
      hvacprice = hvac6Ton;
    }
    console.log();
  }

  function setBatteryKwh() {
    if (batteryTrayType === 27) {
      batteryKwh = 11;
    } else {
      batteryKwh = 20.48;
    }
  }
  useEffect(() => {
    setBatteryKwh();
    setHvacPrice();

    if (installation) {
      setPrice(
        pcs * pcsPrice +
          batteryKwh * batteryPrice * batteryTray +
          installationPrice +
          Container40ftPrice +
          hvacprice * hvac
      );
    } else {
      setPrice(
        pcs * pcsPrice +
          batteryKwh * batteryPrice * batteryTray +
          Container40ftPrice +
          hvacprice * hvac
      );
    }
  });
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
            <MenuItem value={500}>500</MenuItem>
            <MenuItem value={750}>750</MenuItem>
            <MenuItem value={1000}>1000</MenuItem>
            <MenuItem value={2000}>2000</MenuItem>
          </Select>
        </FormControl>
        <FormControl required sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="hvac">HVAC Type</InputLabel>
          <Select
            labelId="hvacType"
            id="hvacType"
            value={hvacType}
            label="HVAC Type"
            onChange={handleHVACTypeChange}
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
            onChange={handleHVACChange}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
          </Select>
        </FormControl>
        <FormControl required sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="batteryTrayType">Battery Tray Type</InputLabel>
          <Select
            labelId="batteryTrayType"
            id="batteryTrayType"
            value={batteryTrayType}
            label="BatteryTray Type"
            onChange={handleBatteryTrayTypeChange}
          >
            <MenuItem value={27}>27 ah </MenuItem>
            <MenuItem value={100}>100 ah</MenuItem>
          </Select>
        </FormControl>
        {batteryTrayType === 27 ? (
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
              <MenuItem value={90}>90</MenuItem>
              <MenuItem value={180}>180</MenuItem>
              <MenuItem value={208}>208</MenuItem>
              <MenuItem value={224}>224</MenuItem>
            </Select>
          </FormControl>
        ) : (
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
              <MenuItem value={240}>240</MenuItem>
            </Select>
          </FormControl>
        )}
        <div>
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
        <FormControl fullWidth sx={{ m: 1 }}>
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

export default Container40;
