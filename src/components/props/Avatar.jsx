import React from "react";

const Avatar = ({ person, size }) => {
  console.log(person, size);
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
};

export default Avatar;
