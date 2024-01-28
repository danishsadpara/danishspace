"use client";
import { Box } from "@mui/material";
import React from "react";
import { styles } from "./analytics/styles";
import Profile from "./components/profile";
import Main from "./components/Main";
import Education from "./components/Education";
import Experience from "./components/Experience";

const page = () => {
  return (
    <Box position={"relative"}>
      <Box position={"absolute"} sx={{ bottom: "0%", right: "0%" }}>
        <Profile />
      </Box>
      <Main />
      <Box alignSelf={"flex-start"} p={3}>
        <Education />
        <Experience />
      </Box>
    </Box>
  );
};

export default page;
