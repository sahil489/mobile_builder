import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Icon from "@mui/material/Icon";
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";

const Navbar = () => {
  const pages = ["Design", "Notification", "Message", "Integrations"];
  const icons = [
    MarkChatUnreadOutlinedIcon,
    DesignServicesOutlinedIcon,
    TextsmsOutlinedIcon,
    IntegrationInstructionsOutlinedIcon,
  ];

  //   const [anchorElNav, setAnchorElNav] = useState(null);
  //   const [anchorElUser, setAnchorElUser] = useState(null);

  //   const handleOpenNavMenu = (event) => {
  //     setAnchorElNav(event.currentTarget);
  //   };
  //   const handleOpenUserMenu = (event) => {
  //     setAnchorElUser(event.currentTarget);
  //   };

  //   const handleCloseNavMenu = () => {
  //     setAnchorElNav(null);
  //   };

  //   const handleCloseUserMenu = () => {
  //     setAnchorElUser(null);
  //   };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            shopney
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button variant="contained" color="success">
              Success
            </Button>

            <Button variant="contained">PREVIEW</Button>
            <FormControl>
              <InputLabel id="demo-simple-select-label">vv</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="vv"
                // onChange={handleChange}
              >
                <MenuItem>Option-1</MenuItem>
                <MenuItem>Option-2</MenuItem>
                <MenuItem>Option-3</MenuItem>
              </Select>
            </FormControl>

            {/* <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              // anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              // open={Boolean(anchorElUser)}
              // onClose={handleCloseUserMenu}
            >
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
