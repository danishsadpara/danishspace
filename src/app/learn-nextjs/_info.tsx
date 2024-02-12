import { Chip, Box, Typography, Card, Divider } from "@mui/material";
import Link from "next/link";
import React from "react";

const Info = () => {
  return (
    <Card sx={{ width: 500, p: "16px" }}>
      <Typography variant="body1" fontWeight={"bold"}>
        Link is used for navigation from one screen to other
      </Typography>
      <Box py={2}>
        <Divider />
      </Box>
      <Typography variant="body2">
        Important concept is Replace which reset the trace histroy of the route,
        and when a user want to go back one step it bounced the user to home
        page.
      </Typography>
      <Box py={2}>
        <Divider />
      </Box>
      <Typography>Demonstration</Typography>
      <Link href={"/magic-link"} replace>
        Click me and see the magic
      </Link>
      <Box py={2}>
        <Divider />
      </Box>
      <Typography>Active Link</Typography>
      <Typography>
        It is accomplished by using pathname supported by next/navigation
      </Typography>
      <Typography>import usePathname form next/navigation;</Typography>
      <Typography color={"blue"}>const pathname= usePathname();</Typography>
      <Typography color={"blue"}>
        const isActive=pathname.startWith(link.href)
      </Typography>
    </Card>
  );
};

export default Info;
