import React from 'react';
import styled from 'styled-components';
import backgroundImage from './banner1.png'; // Замените 'your_image.jpg' на путь к вашему изображению

const Buttons = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (min-width: 800px) {
    height: 100%;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-top: 0!important;
  }

  & > button {
    border: none;
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    background: #ffffffdf;
    transition: background .2s ease;
    &:hover {
      background: white;
    }
    color: black;
    cursor: pointer;
  }
`
const Welcome = styled.div`
  /* Стили приветственного баннера */
  background-image: url(${backgroundImage}); /* Установка вашего изображения в качестве фона */
`;


export function WelcomeBanner() {
  return (
    <Welcome>
      <div>
        <h1>Welcome to Biden Gamble</h1>
        <p>Enjoy the game right here and now🎰</p>
      </div>
      <Buttons>
        <button onClick={() => window.open('https://www.pump.fun/board', '_blank')}>
          🚀 Buy $BIGA 
        </button>
        <button onClick={() => window.open('https://twitter.com/Biden_Gamble', '_blank')}>
          💬 X
        </button>
      </Buttons>
    </Welcome>
  );
}
