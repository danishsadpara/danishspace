"use client";
import { Avatar, Paper, Chip, Typography, Divider, Box } from "@mui/material";
import React from "react";
import { styles } from "./analytics/styles";
import Profile from "./components/profile";
import Main from "./components/Main";
import Education from "./components/Education";

const page = () => {
  const classes = styles();
  return (
    <>
      <Paper className={classes.modal}>
        {/* <Profile /> */}
        <Main />
        <Box alignSelf={"flex-start"}>
          <Education />
        </Box>
      </Paper>
    </>
  );
};

export default page;
