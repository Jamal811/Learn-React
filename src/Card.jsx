import React from "react";

const Card = ({ photo }) => {
  const visitLink = () => {
    window.open(photo.url, "_blank");
  };

  return (
    <div className="col mb-3 mt-5">
      <div className="card">
        <img
          src={photo.src.medium}
          alt={photo.photographer}
          className="card-img-top object-fit-cover align-center"
          style={{ width: "400px", height: "400px" }}
        />
        <div className="card-body">
          <h2 className="card-title">{photo.photographer}</h2>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
            voluptate?
          </p>
          <button onClick={visitLink} className="btn btn-primary">
            Visit Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
