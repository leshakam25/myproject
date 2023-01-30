import { Button, Container, Typography } from "@mui/material";
import React from "react";

const Wrapper = () => {
  //Сюда мы кладем компоненты
  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button variant="contained" color="secondary">
        Button
      </Button>
      <Typography variant="h6"> Button</Typography>
      <Button variant="contained">Button</Button>
    </Container>
  );
};

export default Wrapper;
