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
const data = [
  {
    institute: "Pixako Technologies ",
    degree: "Associate Software Engineer",
  },
];
const EList = [
  {
    label: "Select campaign settings",
  },
  {
    label: "Create an ad group",
  },
  {
    label: "Create an ad",
  },
];
const skills = ["React", "Material UI", "Nextjs", "GraphQL", "MongoDB"];
const Experience = () => {
  return (
    <Box>
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
      <List>
        {EList.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText primary={item.label} />
            </ListItem>
            {index !== EList.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default Experience;
