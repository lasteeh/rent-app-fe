import React from "react";

function PlaceholderRental() {
  return (
    <div className="text-transparent flex flex-col gap-2 items-stretch">
      <div className="placeholder-bg | h-20 rounded-xl"></div>
      <div className="flex flex-wrap items-end gap-2">
        <span className="placeholder-bg">placeholder</span>
        <span className="placeholder-bg | text-xs">placeholder</span>
      </div>
      <div className="placeholder-bg">
        <span>placeholder</span>
      </div>
    </div>
  );
}

export default PlaceholderRental;
