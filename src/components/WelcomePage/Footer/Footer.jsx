import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import "./footer.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
import GitHub from "../../../assests/images/github.png"
export const Footer = () => {
  return (
    <div>
      <Grid className="footer_content">
        <Box>
          <Typography>Phone</Typography>
          <Typography>1236547890</Typography>
        </Box>
        <Box>
          <Typography>Email</Typography>
          <Typography>email@gmail.com</Typography>
        </Box>
        <Box>
          <Typography>Follow Me</Typography>
          <LinkedInIcon/>
          <InstagramIcon/>
          <FacebookIcon/>
          {/* <TwitterIcon/> */}
          <img src={GitHub} alt="" />
        </Box>
      </Grid>
    </div>
  );
};
