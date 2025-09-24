import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

const TableView = ({
  tableData,
  setTableData,
  handleIfDraggedUser,
  handleIfVerifiedUser,
}) => {
  const handleDrogOver = (e) => {
    e.preventDefault();
  };
  const handleDrag = (e) => {
    e.preventDefault();
    const draggedData = JSON.parse(e.dataTransfer.getData("cardData"));
    setTableData((prev) => [...prev, draggedData]);
  };

  const handleCancel = (data, index) => {
    setTableData((prev) =>
      prev.filter((elem, elemIndex) => elemIndex !== index)
    );
    handleIfDraggedUser(data.id, false, false);
  };

  const handleSelectUser = (data) => {
    handleIfVerifiedUser(data);
  };

  return (
    <table onDragOver={handleDrogOver} onDrop={handleDrag}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((rowElem, index) => (
          <tr>
            <td>{rowElem.name}</td>
            <td>{rowElem.age}</td>
            <td>{rowElem.city}</td>
            <td>
              <div className="table-action-btn">
                <div onClick={() => handleSelectUser(rowElem)}>
                  <DoneIcon sx={{ color: "green", cursor: "pointer" }} />
                </div>
                <div onClick={() => handleCancel(rowElem, index)}>
                  <CloseIcon sx={{ color: "red", cursor: "pointer" }} />
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableView;
