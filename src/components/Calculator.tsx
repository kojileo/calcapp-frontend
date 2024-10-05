// src/components/Calculator.tsx
import React, { useState } from "react";
import { TextField, Button, Grid, Box } from "@mui/material";
import axios from "axios";

const Calculator: React.FC = () => {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleOperation = async (operation: string) => {
    try {
      const apiUrl: string = process.env.REACT_APP_API_URL!;
      const response = await axios.post(
        apiUrl,
        {
          num1: parseFloat(num1),
          num2: parseFloat(num2),
          operation,
        }
  );
  setResult(response.data.result);
} catch (error) {
  console.error(error);
}};

  return (
    <Box width="100%" maxWidth="400px">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Number 1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Number 2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between">
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleOperation("add")}
            >
              Add
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleOperation("subtract")}
            >
              Subtract
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleOperation("multiply")}
            >
              Multiply
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleOperation("divide")}
            >
              Divide
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Result" value={result} fullWidth disabled />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Calculator;