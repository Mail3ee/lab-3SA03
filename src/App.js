import React from 'react';
import './App.css';
import WordCard from './WordCard';
import _, { attempt } from 'lodash';

const word = (["Hello", "Hi-COE", "Test123", "Good-Morning"]);
function App() {
    return ( 
        < div >
            <WordCard value={_.sample(word)}/>
        </div>
    );
}

export default App;