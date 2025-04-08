import React, { useState } from "react";
import { IconButton, Menu, MenuItem, useMediaQuery, useTheme } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        color="inherit"
        onClick={handleClick}
        size="large"
        edge="end"
        sx={{ ml: "auto" }}
      >
        <AccountCircleIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        PaperProps={{
          sx: {
            width: isMobile ? "100%" : "220px",
            padding: 1,
            mt: 1,
            borderRadius: 2,
          }
        }}
      >
        <MenuItem
          component={Link}
          to="/profile"
          onClick={handleClose}
          sx={{
            color: "#063970",
            fontWeight: 500,
            '&:hover': {
              backgroundColor: '#063970',
              color: "#fff",
              borderRadius: '10px'
            }
          }}
        >
          View Profile
        </MenuItem>

        <MenuItem
          component={Link}
          to="/login"
          onClick={handleClose}
          sx={{
            color: "#063970",
            fontWeight: 500,
            '&:hover': {
              backgroundColor: '#063970',
              color: "#fff",
              borderRadius: '10px'
            }
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}

export default AccountMenu;
