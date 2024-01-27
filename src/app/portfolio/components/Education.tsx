import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { IData } from "../analytics/interfaces";
import data from "../analytics/data.json";
const Education = () => {
  return (
    <>
      <Typography variant="h6" fontWeight={"bolder"}>
        Education
      </Typography>
      <Divider />
      {data.map((data, index) => (
        <List key={index}>
          <ListItem>
            <ListItemText
              primary={
                <Typography fontWeight={"bolder"}>{data.institute}</Typography>
              }
              secondary={data.degree}
            />
          </ListItem>
        </List>
      ))}
    </>
  );
};

export default Education;
