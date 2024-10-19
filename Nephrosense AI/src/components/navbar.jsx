
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <header className="w-dvw absolute top-0 left-1/2 -translate-x-1/2 z-[1000] py-4">
      <div className="max-w-[120rem] text-gray-50 px-6 md:px-8 lg:px-10">
        <nav className="w-full flex flex-row items-center font-sans">
          <a className="text-gray-50" href="/">
            <svg className="h-8 w-8" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="94" y="81" width="40" height="350" fill="currentColor"></rect>
              <rect x="264" y="81" width="40" height="350" fill="currentColor"></rect>
              <circle cx="199" cy="131" r="50" fill="currentColor"></circle>
              <circle cx="199" cy="246" r="50" fill="currentColor"></circle>
              <circle cx="369" cy="131" r="50" fill="currentColor"></circle>
              <circle cx="369" cy="246" r="50" fill="currentColor"></circle>
            </svg>
          </a>
          <div className="flex-1 relative hidden md:flex items-center justify-center text-black">
            <ul className="mx-auto inline-flex gap-6 text-sm font-light">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li><a href="">Qui sommes nous?</a></li>
              <li><a href="">Plan</a></li>
            </ul>
            <ul className="absolute right-0">
              <li className="relative">
                <Link to="/login" className="h-10 rounded-lg flex items-center justify-center text-base bg-accent-500 leading-none px-12 uppercase">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;
