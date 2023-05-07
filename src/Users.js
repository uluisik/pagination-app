import React from "react";

const Users = ({ users, page }) => {
  const startIndex = (page - 1) * 10;
  const selectedUsers = users.slice(startIndex, startIndex);
  return <div>User</div>;
};

export default Users;
