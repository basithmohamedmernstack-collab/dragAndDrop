import { useState } from "react";

const TableView = ({ tableData, setTableData }) => {
  const handleDrogOver = (e) => {
    e.preventDefault();
  };
  const handleDrag = (e) => {
    e.preventDefault();
    const draggedData = JSON.parse(e.dataTransfer.getData("cardData"));
    setTableData((prev) => [...prev, draggedData]);
  };

  return (
    <table onDragOver={handleDrogOver} onDrop={handleDrag}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((rowElem) => (
          <tr>
            <td>{rowElem.name}</td>
            <td>{rowElem.age}</td>
            <td>{rowElem.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableView;
