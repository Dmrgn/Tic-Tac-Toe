import React, { useState } from 'react';

import './Board.css';
import Square from "./Square";
import {patterns} from "../assets/patterns.js";

function Board(props) {
    const [board, setBoard] = useState([[" "," "," ",],[" "," "," ",],[" "," "," ",]]);
    const [turn, setTurn] = useState("X");
    const [isGameOver, setIsGameOver] = useState(false);

    function restartGame() {
        setBoard([[" "," "," ",],[" "," "," ",],[" "," "," ",]]);
        setIsGameOver(false);
        setTurn("X");
        props.setWhoseTurn("X");
        props.setCustomText(false);
    }

    function makeMove(x, y) {
        // check if valid move
        if (board[y][x] !== " " || isGameOver) return;
        // set move
        board[y][x] = turn;
        const toSet = turn === "X" ? "O" : "X";
        setTurn(toSet);
        props.setWhoseTurn(toSet);
        // check if a player has won
        const flattened = board.flat().join("");
        const isWin = (function() {
            for (const pattern of patterns) {
                let xWin = true, oWin = true;
                for (const i in flattened) {
                    if (pattern[i] === "X" && flattened[i] !== "X")
                        xWin = false;
                    if (pattern[i] === "X" && flattened[i] !== "O")
                        oWin = false;
                    if (!xWin && !oWin) break;
                }
                if (xWin) return "X";
                if (oWin) return "O";
            }
            return false;
        })();
        if (isWin) {
            setIsGameOver(true);
            props.setCustomText(isWin + " wins!");
            return;
        }
        // check if board is full
        if (flattened.indexOf(" ") === -1) {
            setIsGameOver(true);
            props.setCustomText("cat's game ฅ^•ﻌ•^ฅ");
            return;
        }
    }

    return (
        <>
            <div className='board'>
                <div className='flex w-full'>
                    <Square board={board} makeMove={makeMove} x={0} y={0}></Square>
                    <Square board={board} makeMove={makeMove} x={1} y={0}></Square>
                    <Square board={board} makeMove={makeMove} x={2} y={0}></Square>
                </div>
                <div className='flex w-full'>
                    <Square board={board} makeMove={makeMove} x={0} y={1}></Square>
                    <Square board={board} makeMove={makeMove} x={1} y={1}></Square>
                    <Square board={board} makeMove={makeMove} x={2} y={1}></Square>
                </div>
                <div className='flex w-full'>
                    <Square board={board} makeMove={makeMove} x={0} y={2}></Square>
                    <Square board={board} makeMove={makeMove} x={1} y={2}></Square>
                    <Square board={board} makeMove={makeMove} x={2} y={2}></Square>
                </div>
            </div>
            <button onClick={restartGame} className={"bg-slate-700 text-white p-4 my-2 rounded transition-colors hover:bg-slate-300 hover:text-black" + (isGameOver ? "" : " hidden")}>Restart</button>
        </>
    );
}

export default Board;