import React from "react";
import { Avatar, Typography, Box, Stack, Chip } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

const Main = () => {
  return (
    <Stack direction={"row"} spacing={4} alignItems={"center"}>
      <Avatar
        alt="danish sadpara"
        src="/assests/profile.png"
        sx={{ width: 100, height: 100 }}
      />
      <Stack spacing={1}>
        <Typography variant="h4" fontWeight={"bolder"}>
          Muhammad Murtaza Danish
        </Typography>
        <Box>
          <Chip size="small" icon={<LocationOnIcon />} label="Islamabad" />
          <Chip
            size="small"
            icon={<EmailIcon />}
            label="danishsadpara@gmail.com"
            sx={{ ml: "4px" }}
          />
        </Box>
        <Box></Box>
      </Stack>
    </Stack>
  );
};

export default Main;
