import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "@mui/material";

import { useState } from "react";
export default function BasicSelect() {
  const [quickAccess, setquickAccess] = useState("");

  const handleChange = (event) => {
    setquickAccess(event.target.value);
  };



  return (
    <Box sx={{ width:140 }} >
      <FormControl fullWidth>
        <InputLabel id="quickAccess" >Quick Access</InputLabel>
        <Select
          labelId="quickAccess"
          id="quickAccess"
          value={quickAccess}
          label="quickAccess"
          onChange={handleChange}
        >
          <MenuItem value={1}>Quick Access1</MenuItem>
          <MenuItem value={2}>Quick Access2</MenuItem>
          <MenuItem value={3}>Quick Access3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
