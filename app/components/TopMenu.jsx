import React from "react";

const TopMenu = () => {
  return (
    <div className="max-w-3xl mx-auto py-10 text-center space-y-5 md:flex md:justify-between md:items-center">
      <h3 className="text-2xl font-bold">NovelNest</h3>
      <div className="join">
        <div>
          <div>
            <input
              className="input input-bordered join-item"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="indicator">
          <button className="btn join-item">Search</button>
        </div>
      </div>
      <div>
        <button className="btn me-4">Login</button>
        <button className="btn">SignUp</button>
      </div>
    </div>
  );
};

export default TopMenu;
