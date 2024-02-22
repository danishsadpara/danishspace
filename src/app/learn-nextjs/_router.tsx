import { Card, Typography, Box, Divider } from "@mui/material";
import React from "react";

const LearnRouter = () => {
  return (
    <>
      <Card sx={{ width: 500, p: "16px" }}>
        <Typography variant="body1" fontWeight={"bold"}>
          Router is also used for navigation from one screen to other
          dynamically
        </Typography>
        <Box py={2}>
          <Divider />
        </Box>
        <Typography color={"orchid"}>router.push("/route")</Typography>{" "}
        <Typography color={"orchid"}>router.replace("./rpite")</Typography>{" "}
        <Typography color={"orchid"}>router.backward()</Typography>{" "}
        <Typography color={"orchid"}>router.forward()</Typography>
      </Card>
    </>
  );
};

export default LearnRouter;
