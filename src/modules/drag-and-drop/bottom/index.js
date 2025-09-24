import { useEffect, useState } from "react";
import TableView from "../../utils/custom-components/TableView";

const Bottom = ({ filters, handleIfDraggedUser, handleIfVerifiedUser }) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData([]);
  }, [filters]);

  return (
    <div className="app-bottom">
      <TableView
        tableData={tableData}
        setTableData={setTableData}
        handleIfDraggedUser={handleIfDraggedUser}
        handleIfVerifiedUser={handleIfVerifiedUser}
      />
    </div>
  );
};

export default Bottom;
