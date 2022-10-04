import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";

const BuilderChild = ({ BuilderChild, setBuilderChild }) => {
  let options = [
    "Background 1",
    "Background 2",
    "Background 3",
    "Background 4",
  ];
  const [storeName, setStoreName] = useState("");
  const [selectTheme, setSelectTheme] = useState("");
  const [link, setLink] = useState("");

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  return (
    <div style={{ display: "flex", justifyContent: "end" }}>
      <strong>Announcement Bar</strong>
      <br />
      <Box component="form" noValidate autoComplete="off">
        <FormControl sx={{ width: "30ch" }}>
          <label>Store Name</label>
          <OutlinedInput
            type="text"
            value={storeName}
            onChange={handleChange(setStoreName)}
            placeholder="Welcome to our store"
          />
        </FormControl>
        <br />
        <FormControl>
          <label>Color Scheme</label>
          <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
            <Select
              displayEmpty
              onChange={handleChange(setSelectTheme)}
              value={selectTheme}
              input={<OutlinedInput />}
              inputProps={{ "aria-label": "Without label" }}
            >
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <FormControl>
            <label>Link</label>
            <OutlinedInput
              onChange={handleChange(setLink)}
              value={link}
              type="text"
              placeholder="Paste a link..."
            />
          </FormControl>
        </FormControl>
      </Box>
    </div>
  );
};

export default BuilderChild;
