import CustomCard from "../../utils/custom-components/Card";

const Main = ({ users = [] }) => {
  return (
    <div className="app-main">
      {users.map((user) => (
        <CustomCard user={user} />
      ))}
    </div>
  );
};

export default Main;
