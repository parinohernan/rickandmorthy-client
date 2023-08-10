import React, { useState, useEffect } from 'react';
import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix } from 'react-icons/fa';
import './BotonRandom.css'; // Importa tus estilos CSS para el componente

const diceIcons = [
  FaDiceOne,
  FaDiceTwo,
  FaDiceThree,
  FaDiceFour,
  FaDiceFive,
  FaDiceSix,
];

const BotonRandom = () => {
  const [diceValue, setDiceValue] = useState(1);
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    if (isShaking) {
      const shakeTimeout = setTimeout(() => {
        setIsShaking(false);
      }, 3000);

      return () => clearTimeout(shakeTimeout);
    }
  }, [isShaking]);

  const rollDice = () => {
    const newValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(newValue);
    setIsShaking(true);
  };

  const DiceIcon = diceIcons[diceValue - 1];

  return (
    <button
      className={`dice-button ${isShaking ? 'shake' : ''}`}
      onClick={rollDice}
      // onMouseEnter={rollDice}
    >
      {React.createElement(DiceIcon)}
      
    </button>
  );
};

export default BotonRandom;
