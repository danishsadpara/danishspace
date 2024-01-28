import * as React from "react";
import { Stack, Chip, Avatar } from "@mui/material";

const Profile = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        avatar={<Avatar alt="danishsadpara" src="/assests/profile.png" />}
        label="danishsadpara"
        variant="outlined"
      />
    </Stack>
  );
};

export default Profile;
