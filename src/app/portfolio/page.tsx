"use client";
import { Box } from "@mui/material";
import React from "react";
import { styles } from "./analytics/styles";
import Profile from "./components/profile";
import Main from "./components/Main";
import Education from "./components/Education";

const page = () => {
  return (
    <>
      <Box>
        {/* <Profile /> */}
        <Main />
        <Box alignSelf={"flex-start"} p={3}>
          <Education />
        </Box>
      </Box>
    </>
  );
};

export default page;
