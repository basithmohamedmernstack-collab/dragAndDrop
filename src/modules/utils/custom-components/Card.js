import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CustomCard = ({ user = {} }) => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <Box sx={{ minWidth: 300 }}>
      <Card variant="outlined">
        <CardContent>
          <div>Name : {user.name}</div>
          <div>Age : {user.age}</div>
          <div>City : {user.city}</div>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CustomCard;
