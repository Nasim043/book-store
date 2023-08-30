// src/Navbar.js
'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { RiCloseFill } from 'react-icons/ri';

const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = <>
    <Link href='#' className="text-base md:text-xl font-semibold">Home</Link>
    <Link href='#' className="text-base md:text-xl font-semibold">Books</Link>
    <Link href='#' className="text-base md:text-xl font-semibold">Categories</Link>
    <Link href='#' className="text-base md:text-xl font-semibold">Authors</Link>
    <Link href='#' className="text-base md:text-xl font-semibold">Request Book</Link>
    <Link href='#' className="text-base md:text-xl font-semibold">Blog</Link>
  </>

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between md:justify-center items-center">
        {/* <div className="text-white text-2xl font-bold">NovelNest</div> */}
        <div className="hidden md:flex space-x-14">
          {/* <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">Books</a>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Contact</a> */}
          {navItems}
        </div>
        <div className="md:hidden justify-end">
          <button
            className="text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <RiCloseFill /> : <HiMenuAlt1 />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          <ul className="bg-blue-500 p-2 space-y-2 flex flex-col">
            {/* <li><a href="#" className="text-white">Home</a></li>
            <li><a href="#" className="text-white">Books</a></li>
            <li><a href="#" className="text-white">About</a></li>
            <li><a href="#" className="text-white">Contact</a></li> */}
            {navItems}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar2;
