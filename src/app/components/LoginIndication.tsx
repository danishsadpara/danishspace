"use client";
import React from "react";
import { Card, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { styles } from "./styles";

const LoginIndication = () => {
  const classes = styles();
  return (
    <Card className={classes.modal}>
      <InfoOutlinedIcon color="success" />
      <Typography ml={2} fontFamily={"cursive"}>
        Please! login to get into portfolio
      </Typography>
    </Card>
  );
};

export default LoginIndication;
