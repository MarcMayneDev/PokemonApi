import { Card, CardContent, Skeleton } from "@mui/material";
import React from "react";

const LoadingCard = () => {
  return (
    <Card sx={{ width: "16rem" }}>
      <Skeleton variant="rectangular" animation="wave" width={96} height={96} />
      <CardContent>
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      </CardContent>
    </Card>
  );
};

export default LoadingCard;
