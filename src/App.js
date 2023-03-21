import "./index.css";
import React, { useState } from "react";
import Jokes from "./Jokes";
import AddJoke from "./AddJoke";

export default function App() {
   const [jokes, setJokes] = useState([
      {
         id: 1,
         text: "Why do we tell actors to 'break a leg'? Because every play has a cast.",
         likes: 5
      },
      {
         id: 2,
         text: "What’s a cat’s favorite dessert? A bowl full of mice-cream.",
         likes: 4
      },
      {
         id: 3,
         text: "Did you hear about the guy whose left side was cut off? He's all right now.",
         likes: 9
      }
   ]);

   const onAdd = (newJoke) => {
      setJokes([
         { id: Math.floor(Math.random() * 10000), text: newJoke, likes: 0 },
         ...jokes
      ]);
   };

   const handleDelete = (id) => {
      setJokes(jokes.filter((joke) => joke.id !== id));
   };

   const handleLike = (id) => {
      setJokes((prevState) =>
         prevState.map((joke) => {
            return id === joke.id ? { ...joke, likes: joke.likes + 1 } : joke;
         })
      );
   };

   const handleDislike = (id) => {
      setJokes((prevState) =>
         prevState.map((joke) => {
            return id === joke.id ? { ...joke, likes: joke.likes - 1 } : joke;
         })
      );
   };

   const handleSort = () => {
      setJokes([...jokes].sort((a, b) => b.likes - a.likes));
   };

   console.log(jokes);
   return (
      <div className="App">
         <h1>Joke of the Day</h1>
         <AddJoke onAdd={onAdd} />
         <button onClick={handleSort}>Sort by Popularity</button>
         <Jokes
            jokes={jokes}
            onDelete={handleDelete}
            onLike={handleLike}
            onDislike={handleDislike}
         />
      </div>
   );
}
