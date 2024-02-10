"use client";
import * as React from "react";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function ButtonAppBar() {
  const pathname = usePathname();
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Danish coding dojo
        </Typography>
        <Button
          component={Link}
          href="/login"
          color="primary"
          sx={{ textDecoration: "none" }}
          className={`link ${pathname === "/login" ? "active" : ""}`}
        >
          LOGIN
        </Button>
      </Toolbar>
    </AppBar>
  );
}
