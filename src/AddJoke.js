import React, { useState } from "react";

export default function AddJoke({ onAdd }) {
   const [newJoke, setNewJoke] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      onAdd(newJoke);
      setNewJoke("");
   };

   return (
      <form onSubmit={handleSubmit}>
      
         <input
            type="text"
            value={newJoke}
            onChange={(e) => setNewJoke(e.target.value)}
         />
        <button>add</button>
         
      </form>
   );
}
