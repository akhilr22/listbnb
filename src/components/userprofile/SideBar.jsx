import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getLinkClass = (path) => (
    currentPath === path
      ? 'font-bold text-black block'
      : 'text-gray-600 hover:text-black block'
  );

  return (
    <aside className="w-1/4 bg-white shadow rounded-lg p-6">
      <ul className="space-y-4">
        <li>
          <Link to="/userprofile/myaccount" className={getLinkClass('/userprofile/myaccount')}>
            My Account
          </Link>
        </li>
        <li>
          <Link to="/userprofile/profile" className={getLinkClass('/userprofile/profile')}>
            Profile
          </Link>
        </li>
        <li>
          <Link to="/userprofile/ads" className={getLinkClass('/userprofile/ads')}>
            Ads
          </Link>
        </li>
        <li>
          <Link to="/userprofile/post-ad" className={getLinkClass('/userprofile/post-ad')}>
            Post Ad
          </Link>
        </li>
        <li>
          <Link to="/logout" className={getLinkClass('/logout')}>
            Logout
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
