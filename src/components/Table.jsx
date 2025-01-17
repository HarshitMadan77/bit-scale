import React, { useState } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { TbSquareLetterAFilled } from "react-icons/tb";
import { IoLogoChrome } from "react-icons/io";
import { AiFillCodeSandboxSquare } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";

const Table = () => {
  const [tableData, setTableData] = useState([
    ["", <FaRegPlayCircle className="text-blue-500" />, "Oct 12, 2024 at 14:08 PM", "Bitscale Evaluation", "Bitscale Evaluation - Account relevancy", " "],
    ["", <FaRegPlayCircle className="text-blue-500" />, "Oct 12, 2024 at 14:08 PM", "cell data size exceeds limit", "BMW Evaluation - Relevancy check", " "],
    ["", <FaRegPlayCircle className="text-blue-500" />, "Oct 12, 2024 at 14:08 PM", "https://www.linkedin.com", "Google Evaluation - Lievancy check", " "],
    ["", <FaRegPlayCircle className="text-blue-500" />, "Oct 12, 2024 at 14:08 PM", "Loading Data, Please wait", "Apple Evaluation - Olvancy check", " "],
    ["", <FaRegPlayCircle className="text-blue-500" />, "Oct 12, 2024 at 14:08 PM", "Loading Data, Please wait", "Figma Evaluation - Evancy check", " "],
  ]);

  const headers = [
    { icon: <TbSquareLetterAFilled />, text: "Timestamp" },
    { icon: <IoLogoChrome />, text: "Action Column" },
    { icon: <AiFillCodeSandboxSquare />, text: "Enrich Company" },
    { icon: <FaPlus />, text: "Add Column" }
  ];

  const handleCellChange = (rowIndex, colIndex, value) => {
    const updatedData = [...tableData];
    updatedData[rowIndex][colIndex] = value;
    setTableData(updatedData);
  };

  const addRow = () => {
    const newRow = ["", <FaRegPlayCircle className="text-blue-500" />, "", "", "", ""];
    setTableData([...tableData, newRow]);
  };

  // Mobile card view
  const MobileView = () => (
    <div className="space-y-4">
      {tableData.map((row, rowIndex) => (
        <div key={rowIndex} className="bg-white rounded-lg shadow p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-medium">#{rowIndex + 1}</span>
            {row[1]}
          </div>
          {headers.map((header, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-sm text-gray-600 flex items-center gap-2">
                {header.icon} {header.text}
              </div>
              <input
                type="text"
                value={row[idx + 2]}
                onChange={(e) => handleCellChange(rowIndex, idx + 2, e.target.value)}
                className="w-full p-2 border rounded-md bg-gray-50"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  // Desktop table view
  const DesktopView = () => (
    <table className="w-full border-collapse border border-gray-200">
      <thead>
        <tr className="bg-gray-100 shadow-md">
          <th className="border border-gray-300 p-2 w-16"></th>
          <th className="border border-gray-300 p-2 w-16"></th>
          {headers.map((header, idx) => (
            <th key={idx} className="border border-gray-300 p-2 text-left">
              <div className="flex items-center gap-2">
                {header.icon} {header.text}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td className="border border-gray-300 p-2 text-center">
              {rowIndex + 1}
            </td>
            <td className="border border-gray-300 p-2 text-center">
              <div className="flex justify-center items-center">
                {row[1]}
              </div>
            </td>
            {row.slice(2).map((cell, colIndex) => (
              <td key={colIndex} className="border border-gray-300 p-2">
                <input
                  type="text"
                  value={cell}
                  onChange={(e) => handleCellChange(rowIndex, colIndex + 2, e.target.value)}
                  className="w-full bg-transparent outline-none"
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      {/* Hide/show based on screen size */}
      <div className="block md:hidden mt-32">
        <MobileView />
      </div>
      <div className="hidden md:block overflow-x-auto">
        <DesktopView />
      </div>
      
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center gap-2"
        onClick={addRow}
      >
        <FaPlus size={12} /> Add Row
      </button>
    </div>
  );
};

export default Table;