import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const CustomCard = ({ user = {} }) => {
  const handleDragStart = (e, card) => {
    e.dataTransfer.setData("cardData", JSON.stringify(card));
  };

  return (
    <Box sx={{ minWidth: 300 }}>
      <Card
        variant="outlined"
        draggable
        onDragStart={(e) => handleDragStart(e, user)}
      >
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
