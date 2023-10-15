import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Logo from "../../../assests/images/logo.jpg";
import "./header.css"
export const Header = () => {
  return (
    <div>
      <div sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            sx={{
              backgroundColor: "white",
              display: "flex",
              justifyContent: "space-between",
              color:"black",
              alignItems:"center"
            }}
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <img src={Logo} alt="logo" width="55" height="56" />
              <Typography marginTop={"12px"} style={{fontSize:"20px"}}>Rajeev Lochan Panda <span style={{fontSize:"15px"}}>Software Developer Engineer</span></Typography>
              </div>
            <Box>
              <Button color="inherit">Resume</Button>
              <Button color="inherit">Project</Button>
              <Button color="inherit">Contact</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};
