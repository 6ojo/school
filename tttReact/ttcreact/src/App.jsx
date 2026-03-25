import { useState } from 'react'

function App() {
  const [board, setBoard] = useState([
    ["","",""],
    ["","",""],
    ["","",""]
  ])
  const [turn, setTurn] = useState("X")
  const [winner, setWinner] = useState(null)

  function checkWinner(board) {
    for (let i = 0; i < 3; i++) { //horizontal wins
      if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] !== "") {
        setWinner(board[i][0]);
        return;
      }
    }
    for (let i = 0; i < 3; i++) { //verical wins
      if (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] !== "") {
        setWinner(board[0][i]);
        return;
      }
    }
  //diags
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] !== "") {
      setWinner(board[0][0]);
      return;
    }
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] !== "") {
      setWinner(board[0][2]);
      return;
    }
  }

  const message = winner ? winner + ' wins!' : turn + "'s turn";

  
  function reset(){
    setBoard([["","",""],
    ["","",""],
    ["","",""]])
    setTurn("X")
    setWinner(null)
  }

  function handleClick(event){
  const row = event.target.getAttribute('row-index');
  const col = event.target.getAttribute('col-index');
  
  if (board[row][col] || winner) {
    return;
  }
  
  const newBoard = structuredClone(board)
  newBoard[row][col] = turn
  setBoard(newBoard)
  checkWinner(newBoard)
  const changeTurn = turn === "O" ? "X": "O";
  setTurn(changeTurn)
  }

  return (
    <>
    <h1>meow meow meow</h1>
    <h2>{message}</h2>
    {board.map((row, rowI) =>
      <div className="row">
        {row.map((square, colI)=>
        <button onClick={handleClick} row-index={rowI} col-index={colI} className='square'>{square}</button>
        )}
      </div>
      )}
      <div>
        <button className='reset' onClick={reset}>Reset</button>
      </div>
    </>
  )
}


export default App
