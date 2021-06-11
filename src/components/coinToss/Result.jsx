import React from 'react';
//import {Functional} from '../../FunctionalContext'

const Result = ({ isCoinTossed, result }) => {
    //const value = useContext(Functional);

    return (
        <React.Fragment>
            {isCoinTossed ?
                <>
                    <p>This is the result</p>
                    <h1>The coin was tossed: {result[0]+result[1]} times</h1>
                    <h1>Showed heads: {result[0]} times</h1>
                    <h1>Showed tails: {result[1]} times</h1>
                    <h1>So, you got heads with a probability: {result[2]} % </h1>
                    <h1>And you got heads with a probability: {result[3]} %</h1>
                    <h1>The calculation took {result[4]} ms </h1>
                </>
                : <h1>Toss the coin</h1>}

        </React.Fragment>
    );
}

export default Result;