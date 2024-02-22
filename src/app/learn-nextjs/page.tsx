"use client";
import { Avatar, Box, Chip, Typography } from "@mui/material";
import React from "react";
import Info from "./_info";
import LearnRouter from "./_router";

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
      <LearnRouter />
    </Box>
    // </>
  );
};

export default page;
