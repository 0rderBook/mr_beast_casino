import React from 'react';
import styled from 'styled-components';
import backgroundImage from './banner1.png'; // Замените 'your_image.jpg' на путь к вашему изображению

const Buttons = styled.div`
  /* Стили кнопок */
`;

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
