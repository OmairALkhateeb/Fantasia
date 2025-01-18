
import React, { useState, useEffect } from "react";
import Image from "next/image";
import SearchIcon from "@/assets/icons/search.png"; 

const SearchDrawer = ({ isOpen, toggleDrawer }) => {
  if (!isOpen) return null;

  // State for search input and results
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [allData, setAllData] = useState([  
    { id: 1, name: "Apple", subtitle: "hi there" },
    { id: 2, name: "Banana", subtitle: "hi there" },
    { id: 3, name: "Cherry", subtitle: "hi there" },
    { id: 4, name: "Date", subtitle: "hi there" },
    { id: 5, name: "Elderberry", subtitle: "hi there" },
  ]);

  // Handle input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter data as search input changes
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredResults([]);
    } else {
      const results = allData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredResults(results);
    }
  }, [searchTerm]);

  // Function to clear the search input
  const clearSearch = () => {
    setSearchTerm("");
    setFilteredResults([]);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleDrawer}>
      <div
        style={{ backgroundColor: "#000112" }}
        className="h-full w-80 p-6 shadow-lg overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing the drawer when interacting with it
      >
        {/* Search Bar with icon and Clear button */}
        <div className="mb-4 flex items-center bg-[#000112] p-2 rounded">
          <Image src={SearchIcon} alt="Search" width={20} height={20} className="mr-2" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search..."
            className="w-full px-4 py-2 bg-transparent text-white rounded focus:outline-none"
          />
          {/* Clear Button beside the search bar */}
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="ml-2 text-white text-lg"
            >
              CLEAR
            </button>
          )}
        </div>

        {/* Search Results */}
        <div className="text-white mt-4">
          {filteredResults.length === 0 && searchTerm !== "" ? (
            <p>No results found</p>
          ) : (
            <ul>
              {filteredResults.map((result) => (
                <li
                  key={result.id}
                  className="py-2 rounded hover:bg-gray-700 cursor-pointer"
                >
                  {/* Displaying the name */}
                  <p className="font-semibold px-4">{result.name}</p>

                  {/* Displaying the subtitle */}
                  {result.subtitle && (
                    <p className="text-sm text-gray-400 px-4">{result.subtitle}</p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchDrawer;
