"use client";
import * as React from "react";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function ButtonAppBar() {
  const pathname = usePathname();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Danish coding dojo
          </Typography>
          <Button
            component={Link}
            href="/login"
            color="inherit"
            disabled={pathname === "/login" ? false : true}
            sx={{ textDecoration: "none" }}
            className={`link ${pathname === "/login" ? "active" : ""}`}
          >
            LOGIN
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
