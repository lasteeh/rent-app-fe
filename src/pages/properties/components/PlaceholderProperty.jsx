import React from "react";

function PlaceholderProperty() {
  return (
    <div className="text-transparent flex flex-col items-stretch gap-2">
      <div className="placeholder-bg | h-40 rounded-xl"></div>
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

export default PlaceholderProperty;
