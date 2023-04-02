import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://api.pexels.com/v1/search?query=nature&per_page=10", {
      headers: {
        Authorization:
          "Gz5yfEUkOnE7PM1KDRDIYO1kz9mEnoj9RyLn9eMLhA8leQxk3wvx5T7z",
      },
    })
      .then((response) => response.json())
      .then((data) => setPhotos(data.photos))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container">
      <h1 class="text-center mt-5">Pixels Api</h1>{" "}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {photos.map((photo) => (
          <div className="col mb-3" key={photo.id}>
            <Card photo={photo} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
