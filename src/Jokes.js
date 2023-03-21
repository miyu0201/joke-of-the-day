import React from "react";

export default function Jokes({ jokes, onDelete, onLike, onDislike }) {
   return (
      <div>
         {jokes.map((joke) => (
            <div>
               <p>{joke.text}</p>
               <div>Likes: {joke.likes}</div>
               <button onClick={() => onLike(joke.id)}>👍</button>
               <button onClick={() => onDislike(joke.id)}>👎</button>
               <button onClick={() => onDelete(joke.id)}>❌</button>
            </div>
         ))}
      </div>
   );
}
