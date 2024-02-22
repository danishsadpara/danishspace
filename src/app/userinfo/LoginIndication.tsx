"use client";
import React from "react";
import { Button, Card, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { styles } from "./analytics/styles";
import { useRouter } from "next/navigation";

const LoginIndication = () => {
  const classes = styles();
  const router = useRouter();
  return (
    <Card className={classes.modal}>
      <InfoOutlinedIcon color="success" />
      <Typography ml={2} fontFamily={"cursive"}>
        Please! login to get into portfolio
      </Typography>
      <Button
        // variant="outlined"
        onClick={() => router.push("/login")}
        sx={{ ml: "16px" }}
      >
        LOGIN
      </Button>
    </Card>
  );
};

export default LoginIndication;
