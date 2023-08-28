'use client';
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const navItems = <>
  //   <Link href='#' className="me-2">Home</Link>
  //   <Link href='#' className="me-2">Books</Link>
  //   <Link href='#' className="me-2">Categories</Link>
  //   <Link href='#' className="me-2">Authors</Link>
  //   <Link href='#' className="me-2">Request Book</Link>
  //   <Link href='#' className="me-2">Blog</Link>
  // </>
  // return (
  //   <div className="navbar bg-base-100">
  //     <div className="navbar-start">
  //       <div className="dropdown">
  //         <label tabIndex={0} className="btn btn-ghost lg:hidden">
  //           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
  //         </label>
  //         <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-bage-100 rounded-box w-52">
  //           {navItems}
  //         </ul>
  //       </div>
  //     </div>
  //     <div className="navbar-center hidden lg:flex lg:justify-center lg:items-center">
  //       <ul className="menu menu-horizontal px-1">
  //         {navItems}
  //       </ul>
  //     </div>
  //   </div>
  // );
};

export default Navbar;
