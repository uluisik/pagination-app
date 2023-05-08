import React from "react";

const Pagination = ({ totalPages, handleClick }) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);
  return (
    <div>
      {pages.map((num) => {
        return <button onClick={() => handleClick(num)}>{num}</button>;
      })}
    </div>
  );
};

export default Pagination;
