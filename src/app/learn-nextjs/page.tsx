"use client";
import { Avatar, Box, Chip, Typography } from "@mui/material";
import React from "react";
import Info from "./_info";

const page = () => {
  return (
    // <>
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={3}
      mt={5}
    >
      <Chip
        avatar={<Avatar alt="Link" src="../../static/images/avatar.png" />}
        label="Link in Next JS"
        variant="outlined"
      />
      <Info />
    </Box>
    // </>
  );
};

export default page;
