import React, { useState } from 'react';
import { initTWE, Dropdown } from 'tw-elements';
import { useAuth } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';
import useOutsideClick from '../../Hooks/useOutsideClick';

initTWE({ Dropdown });

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { isAuthenticated,logout,userData } = useAuth();  

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOutsideClick = () => {
    setDropdownOpen(false); 
  };

  const ref = useOutsideClick(handleOutsideClick);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-gray-800">
          <Link to={"/"}> 
          list<span className="text-pink-600">bnb</span>

          </Link>
        </div>
        <div className="flex items-center space-x-4" >
          {
            isAuthenticated &&  <div className="relative">
            <button
              className="flex items-center  whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
              onClick={toggleDropdown} 
              aria-expanded={dropdownOpen}
            >
              <span className='pr-2 '>{userData.username}</span>
              <img
                src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                className="rounded-full"
                style={{ height: 25, width: 25 }}
                alt="User Avatar"
                loading="lazy"
              />
            </button>
            {dropdownOpen}
            {dropdownOpen && (
              <ul
                className="absolute z-[1000] float-left m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg"
                aria-labelledby="dropdownMenuButton2"
                ref={ref}
              >
                
                <li>
                  <Link
                    className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60"
                    to ="/userprofile/myaccount"
                  >
                    My Account
                  </Link>
                </li>
                <li>
                  <button
                    className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
          }
       {!isAuthenticated &&  <a href="#" className="text-gray-600 hover:text-gray-900">
            Sign In
          </a>}
          <Link to="/userprofile/post-ad" className="px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700">
            Post Your Ad
          </Link>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
