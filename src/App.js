import React, {useState} from 'react';
import './App.css';
import WordCard from './WordCard';
import _, { attempt } from 'lodash';

const text = (["Hello", "Hi-COE", "Test123", "Good-Morning"]);

function App() {
    const [word, setWord] = useState("");
    const [fail, setFail] = useState(1);

    return ( 
        < div >
            <WordCard value={_.sample(text)} word = {word} setWord = {setWord} fail = {fail} setFail = {setFail}  />
        </div>
    );
}

export default App;