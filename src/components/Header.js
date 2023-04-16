import React from "react";

const Header = (props) => {
  return (
    <div>
      {" "}
      <div className="firstRow">
        <h1>{props.name} Books Online</h1>{" "}
      </div>
    </div>
  );
};

export default Header;
