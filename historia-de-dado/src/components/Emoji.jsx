import React, { useState } from "react";
import './Emoji.css'
import { IoReloadCircleSharp } from "react-icons/io5";;
 
function Emoji() {
  const emojis = ["😶‍🌫️", "😴", "🥶", "🥵", "🤢", "🥳", "👽", "👻", "🐯", "🐒", "🦕", "🐳"];

  const [emoji, setEmoji] = useState(IoReloadCircleSharp); 

  const trocaEmoji = () => {
    const aleatorio = Math.floor(Math.random() * emojis.length); 
    setEmoji(emojis[aleatorio]); 
  };

  return (
    <div className="body">
      <p className="emoji">{emoji}</p>
      <button className="botao" onClick={trocaEmoji}>Troca</button>
    </div>
  );
}

export default Emoji;
