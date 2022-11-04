import React, { useState } from 'react';

import './App.css';
import Board from './components/Board';

function App() {
    const [whoseTurn, setWhoseTurn] = useState("X");
    const [customText, setCustomText] = useState(false);

    return (
        <>
            <header className='sticky top-0'>
                <div className="columns-3 w-full h-16 bg-opacity-80 bg-slate-800 shadow-xl">
                    <div className="flex h-full justify-start items-center ml-4">
                        <h1 className="text-center text-2xl text-white">
                            TicTacToe #
                        </h1>
                    </div>
                    <div className="flex h-full justify-center items-center">
                        <h1 className="text-center text-lg text-white">
                            {customText || `It is ${whoseTurn}'s turn.`}
                        </h1>
                    </div>
                    <div className="flex h-full justify-end items-center mr-4">
                        <h1 className="text-center text-lg text-white">
                            Created by <a className="underline transition-colors hover:text-orange-500" href="https://danielmorgan.xyz">Daniel Morgan</a>
                        </h1>
                    </div>
                </div>
            </header>
            <main>
                <div className='w-full flex justify-center flex-col items-center mt-8'>
                    <Board setWhoseTurn={setWhoseTurn} setCustomText={setCustomText}></Board>
                </div>
            </main>
            <footer>
                <div className='absolute bottom-0 w-full flex justify-center'>
                    <div className='bg-slate-700 p-4 mb-2 rounded'>
                        <a className='flex' href="https://github.com/dmrgn">
                            <h2 className='text-white underline transition-colors hover:text-orange-500'>On Github</h2>
                            <img className='ml-2 aspect-square' src="https://img.icons8.com/ios-glyphs/16/null/github.png" alt='github logo'/>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default App;
