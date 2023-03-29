import React from "react";
import Jokes from "./Jokes";
import "./Jokes.css";

const JokeList = () => {
  const jokes = [
    {
      id: 1,
      joke: "Why did the tomato turn red? Because it saw the salad dressing!",
      rating: 4.5,
    },
    {
      id: 2,
      joke: "Why don't scientists trust atoms? Because they make up everything.",
      rating: 3.2,
    },
    {
      id: 3,
      joke: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
      rating: 4.9,
    },
    {
      id: 4,
      joke: "Why did the chicken cross the road? To get to the other side.",
      rating: 2.7,
    },
    {
      id: 5,
      joke: "Why do we tell actors to 'break a leg?' Because every play has a cast.",
      rating: 4.1,
    },
  ];

  return (
    <div className="joke-list">
      <h1>Dads Jokes</h1>
      {jokes
        .filter((joke) => joke.rating > 3)
        .map((joke) => (
          <Jokes key={joke.id} joke={joke} />
        ))}
    </div>
  );
};

export default JokeList;
