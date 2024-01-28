import React from "react";
import {
  Box,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import CStepper from "./Stepper";
const data = [
  {
    institute: "Pixako Technologies ",
    degree: "Associate Software Engineer",
  },
];

const skills = ["React", "Material UI", "Nextjs", "GraphQL", "MongoDB"];
const Experience = () => {
  return (
    <>
      <Typography variant="h6" fontWeight={"bolder"}>
        Experience
      </Typography>
      <Divider />
      {data.map((data, index) => (
        <List key={index}>
          <ListItem>
            <ListItemIcon></ListItemIcon>
            <ListItemText
              primary={
                <Typography fontWeight={"bolder"}>{data.institute}</Typography>
              }
              secondary={skills.map((skill, index) => (
                <Chip
                  label={skill}
                  key={index}
                  size="small"
                  variant="outlined"
                  sx={{ marginLeft: index !== 0 ? "5px" : "" }}
                />
              ))}
            />
          </ListItem>
        </List>
      ))}
      <CStepper />
    </>
  );
};

export default Experience;
