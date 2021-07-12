import React, {useState} from 'react';
import './App.css';
import WordCard from './WordCard';
import _, { attempt } from 'lodash';

const text = (["Hello", "Hi-COE", "Test123", "Good-Morning"]);

function App() {
    const [word, setWord] = useState("");
    const [fail, setFail] = useState(1);

    const newGame = () => {
        window.location.reload()
    }

    return ( 
        < div >
            <WordCard value={_.sample(text)} word = {word} setWord = {setWord} fail = {fail} setFail = {setFail}  />
            <button className="newgame" onClick={newGame}>
                New Game
            </button>
        </div>

       
    );
}

export default App;