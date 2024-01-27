import * as React from "react";
import { Stack, Chip, Avatar } from "@mui/material";

export default function Profile() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        avatar={<Avatar alt="danishsadpara" src="/assests/profile.png" />}
        label="Muhammad Murtaza Danish"
        variant="outlined"
      />
    </Stack>
  );
}
