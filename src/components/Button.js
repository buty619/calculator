import React from "react";
import "../App.css";

export default function Button({ children,className,onClick}) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
