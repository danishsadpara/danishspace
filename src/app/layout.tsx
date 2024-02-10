import { Box, Divider, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Box mt={10} mx={30}>
          {children}
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          position={"fixed"}
          bottom={"0"}
          right={"50%"}
        >
          <Divider />
          <Typography variant="subtitle1" color={"gray"}>
            copyright @2022
          </Typography>
        </Box>
      </body>
    </html>
  );
}
