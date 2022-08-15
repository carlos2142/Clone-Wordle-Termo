import React, { useContext } from 'react'
import { AppContext } from '../App'

function GameOver() {
  const {
    board,
    setBoard,
    currAttempt,
    gameOver,
    onSelectLetter,
    correctWord,
    onDelete
  } = useContext(AppContext)
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord ? '  Parabéns! ' : ' A palavra correta é: '}
        {gameOver.guessedWord ? '' : correctWord}
      </h3>

      {gameOver.guessedWord && (
        <h4>Você acertou em {currAttempt.attempt} tentativas.</h4>
      )}
    </div>
  )
}

export default GameOver
