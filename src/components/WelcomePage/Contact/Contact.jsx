import React from "react";
import {
  Box,
  Button,
  Grid,
  InputLabel,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import "./contact.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
const Contact = () => {
  const phoneNumber = "9348702096";

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const email = "pandarajeevlochan@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };
  return (
    <div className="contact-container">
      <Grid mt={0} mb={6} container justifyContent="space-around">
        <div className="contact_details">
          <Box marginBottom={5}>
            <Typography mb={0} fontSize={42}>
              Contact
            </Typography>
            <div>Looking forward to hearing from you</div>
          </Box>

          <Box onClick={handlePhoneClick} style={{ cursor: "pointer" }}>
            <Typography fontSize={18}>
              <LocalPhoneIcon />
              {phoneNumber}
            </Typography>
          </Box>
          <Box onClick={handleEmailClick} style={{ cursor: "pointer" }}>
            <Typography fontSize={18}>
              <EmailOutlinedIcon />
              {email}
            </Typography>
          </Box>
        </div>
        <div className="form-container">
          <form>
            <InputLabel>First Name</InputLabel>
            <TextField fullWidth margin="normal" name="firstName" />
            <InputLabel>Last Name</InputLabel>
            <TextField fullWidth margin="normal" name="lastName" />
            <InputLabel>Email</InputLabel>
            <TextField
              fullWidth
              margin="normal"
              type="email"
              name="email"
              required
            />
            <InputLabel>Subject</InputLabel>
            <TextField fullWidth margin="normal" name="subject" />
            <InputLabel>Message</InputLabel>
            <TextareaAutosize
              fullWidth
              margin="normal"
              name="message"
              minRows={8}
              style={{ width: "100%", resize: "none" }}
            />
            <div className="button-container">
              <Button
                sx={{
                  background: "#d19e0f",
                  borderRadius: "92px",
                  height: "45px",
                  width: "100px",
                  color: "black",
                  border: "1px solid black",
                  fontSize: "15px",
                  fontWeight: "bolder",
                  ":hover": {
                    bgcolor: "white",
                    color: "black",
                  },
                }}
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Grid>
      <hr />
    </div>
  );
};

export default Contact;
