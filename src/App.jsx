import React, { useState } from "react";
import Table from "./components/Table";
import { FaArrowLeft, FaHome, FaUser, FaCog, FaShareAlt, FaBars } from "react-icons/fa";
import { LuRows3 } from "react-icons/lu";
import { LuColumns3 } from "react-icons/lu";
import { CiFilter } from "react-icons/ci";
import { BiSort } from "react-icons/bi";
import { IoMdDownload } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md"
        onClick={toggleSidebar}
      >
        <FaBars size={20} />
      </button>

      {/* Sidebar */}
      <div className={`${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 w-20 text-black flex flex-col items-center py-4 border-r bg-white shadow-md fixed top-0 left-0 h-full z-40 transition-transform duration-300`}>
        <div className="flex flex-col gap-10 mt-32">
          <div className="cursor-pointer pt-6 hover:text-gray-400">
            <FaHome size={24} />
          </div>
          <div className="cursor-pointer hover:text-gray-400">
            <FaUser size={24} />
          </div>
          <div className="cursor-pointer hover:text-gray-400">
            <FaCog size={24} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:pl-20 p-4 relative">
        {/* Fixed Header */}
        <header className="fixed top-0 left-0 right-0 lg:left-20 bg-white shadow-md z-20 p-4">
          <div className="flex flex-col gap-4 max-w-full overflow-x-auto">
            {/* Top Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <h1 className="text-lg flex items-center gap-4 ml-12 mt-1 lg:ml-0">
                <FaArrowLeft className="hidden lg:block" /> Name of the file
              </h1>
              <div className="flex items-center gap-2">
                <label className="flex cursor-pointer select-none items-center">
                  <h1 className="mr-2 font-semibold">Auto Save</h1>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      className="sr-only"
                    />
                    <div
                      className={`box block h-6 w-10 rounded-full ${
                        isChecked ? "bg-green-500" : "bg-gray-400"
                      } transition-all duration-300`}
                    ></div>
                    <div
                      className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white transition-transform duration-300 ${
                        isChecked ? "translate-x-full" : ""
                      }`}
                    ></div>
                  </div>
                </label>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 w-full">
              {/* Search and Stats */}
              <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-auto">
                <div className="flex items-center border bg-gray-100 rounded-md px-4 py-2 w-full lg:w-64"> 
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-transparent outline-none"
                  />
                </div>
                <div className="flex flex-wrap gap-4 lg:gap-10 text-md font-medium py-2">
                  <p className="flex items-center gap-2"><LuRows3 />1/1 Row</p>
                  <p className="flex items-center gap-2"><LuColumns3 />3/3 Column</p>
                  <p className="flex items-center gap-2"><CiFilter />0 Filter</p>
                  <p className="flex items-center gap-2"><BiSort />Sort</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-auto">
                <button className="items-center border text-white rounded-md px-4 bg-blue-800 py-2 w-full lg:w-auto">
                  Enrich
                </button>
                <div className="flex justify-center gap-6 lg:gap-10 text-md font-medium py-2 lg:mr-10">
                  <p className="flex items-center gap-2"><FaShareAlt /></p>
                  <p className="flex items-center gap-2"><IoMdDownload /></p>
                  <p className="flex items-center gap-2"><RiDeleteBin6Line style={{ color: 'red' }} /></p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Table Content with proper spacing */}
        <main className="w-full overflow-x-auto pt-48 lg:pt-36">
          <div className="min-w-full">
            <Table />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;