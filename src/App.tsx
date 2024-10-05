// src/App.tsx
import React from "react";
import Calculator from "./components/Calculator";
import { Container, Typography, Box } from "@mui/material";

const App: React.FC = () => {
  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h2" align="center" gutterBottom>
          電卓アプリ
        </Typography>
        <Calculator />
      </Box>
    </Container>
  );
};

export default App;