import React from 'react';
import SideBar from './SideBar';
import MyAccount from './MyAccount';
import Advertisements from './Advertisements';
import ProfileForm from './ProfileForm';
import { Routes, Route } from 'react-router-dom';
import PostAd from './PostAd';

const UserProfile = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto mt-8">
        <div className="flex">
          <SideBar />
          <section className="w-3/4 ml-8">
          <Routes>
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/profile" element={<ProfileForm />} />
            <Route path="/ads" element={<Advertisements />} />
            <Route path="/post-ad" element={<PostAd />} />
          </Routes>
          </section>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;
