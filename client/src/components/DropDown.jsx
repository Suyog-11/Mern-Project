import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const DropDown = ({ month, setMonth }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const toggle = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    // Event listener for clicks outside the dropdown
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMonthSelect = (selectedMonth) => {
    setMonth(selectedMonth); // Set the selected month
    setOpen(false); // Close the dropdown after selection
  };

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <div className="absolute top-50 right-28">
      <button
        id="dropdownDelayButton"
        ref={buttonRef}
        className="text-gray-900 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 hover:from-orange-100 hover:to-orange-600 font-semibold rounded-lg text-sm px-5 py-4 text-center inline-flex items-center shadow-lg"
        type="button"
        onClick={toggle}
      >
        {month ? months[month - 1] : 'Select Month'}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1l4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdownDelay"
        ref={dropdownRef}
        className={`${open ? '' : 'hidden'
          } z-10 bg-white rounded-lg shadow-lg w-44 border border-gray-300 mt-2`}
      >
        <ul
          className="py-2 text-sm text-gray-800"
          aria-labelledby="dropdownDelayButton"
        >
          {months.map((monthName, index) => (
            <li key={index}>
              <a
                className="block px-4 py-2 hover:bg-orange-200 hover:text-white cursor-pointer rounded-lg"
                onClick={() => handleMonthSelect(index + 1)} // Pass the month index (1-12)
              >
                {monthName}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
