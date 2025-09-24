import CustomCard from "../../utils/custom-components/Card";

const Main = ({ users = [], handleIfDraggedUser }) => {
  return (
    <div className="app-main">
      {users.map((user) => (
        <CustomCard user={user} handleIfDraggedUser={handleIfDraggedUser} />
      ))}
    </div>
  );
};

export default Main;
