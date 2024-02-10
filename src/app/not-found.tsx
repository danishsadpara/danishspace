"use client";
import { Card, Typography } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Card sx={{ display: "flex", justifyContent: "center", p: "16px" }}>
        <Typography>This page is not exists</Typography>
      </Card>
    </>
  );
};

export default NotFound;
