import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const CustomMenu = ({ items, setFilters, menuKey, filters }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState("");
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (data) => {
    setSelectedItem(data);
    setAnchorEl(null);
    setFilters({ ...filters, [menuKey]: data });
  };

  return (
    <div>
      <Button
        id="customized-button"
        aria-controls={open ? "customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        onClick={handleClick}
        endIcon={anchorEl ? <ArrowDropUpIcon /> : <KeyboardArrowDownIcon />}
        size="medium"
        sx={{ minWidth: "250px" }}
      >
        {selectedItem ? selectedItem : "Select"}
      </Button>

      <Menu
        id="customized-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {items.map((elem, index) => (
          <MenuItem
            onClick={() => handleSelect(elem)}
            selected={selectedItem === elem}
            sx={{ minWidth: "250px" }}
            key={index}
          >
            {elem}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default CustomMenu;
