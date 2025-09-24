import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const CustomCard = ({ user = {}, handleIfDraggedUser }) => {
  const handleDragStart = (e, card) => {
    e.dataTransfer.setData("cardData", JSON.stringify(card));
    handleIfDraggedUser(card.id, true);
  };

  const isdisabled = user.isDragged || false;
  console.log({ user });

  return (
    <Box sx={{ minWidth: 300 }}>
      <Card
        variant="outlined"
        draggable
        onDragStart={(e) => handleDragStart(e, user)}
        disabled={isdisabled}
        sx={{
          ...(isdisabled && {
            backgroundColor: "primary.light",
            color: "primary.contrastText",
          }),
        }}
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
