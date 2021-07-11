import React, { useState } from 'react';
import _, { attempt } from 'lodash';
import CharacterCard from './CharacterCard';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false,
    }
}

export default function WordCard(props) {

    const [state, setState] = useState(prepareStateFromWord(props.value))
    const activationHandler = c => {
        // console.log(`${c} has been activated`)

        let guess = state.guess + c
        
        setState({...state, guess})
        // console.log(guess)

        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log("yeah!")
                setState({...state, guess:'', completed: true, attempt: 1 })
                // SetStatus("Success")
                props.setWord("Success")
                setTimeout(() => {
                    window.location.reload()
                }, 2000);
            }else {
                console.log("Reset")
                setState({...state, guess:'', attempt: state.attempt + 1})
                props.setWord("Fail!!")
                setTimeout(() => {
                    props.setWord("")
                }, 2000);

                props.setFail(props.fail + 1)
                // console.log(props.fail);
                if(props.fail > 2){
                    props.setWord("You Noob")
                    setTimeout(() => {
                        window.location.reload()
                    }, 2000);
                }
            }
        }
    }
    return (
        <div >
            {
                state.chars.map((c, i) => 
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt} />
                )
            }
            <h1>{props.word}</h1>
        </div>
    )
}
