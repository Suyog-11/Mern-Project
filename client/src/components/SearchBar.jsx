import React from 'react';

const SearchBar = ( { search, setSearch }) => {
  return (
    <div className="flex justify-center items-center py-4 absolute left-20">
      <div className="relative w-full max-w-md">
        <input onChange={(e) => setSearch(e.target.value)}
          type="text" 
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
          placeholder="Search..."
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
