'use client';
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const navItems = <>
    <Link href='#' className="me-2">Home</Link>
    <Link href='#' className="me-2">Books</Link>
    <Link href='#' className="me-2">Categories</Link>
    <Link href='#' className="me-2">Authors</Link>
    <Link href='#' className="me-2">Request Book</Link>
    <Link href='#' className="me-2">Blog</Link>
  </>
 return (
    <div className="flex justify-center items-center flex-wrap font-semibold text-lg gap-10 my-5">
      {navItems}
    </div>
  );
};

export default Navbar;
