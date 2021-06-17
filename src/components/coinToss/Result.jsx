import React from 'react';
//import {Functional} from '../../FunctionalContext'

const Result = ({ isCoinTossed, result }) => {
    //const value = useContext(Functional);

    return (
        <React.Fragment>
            {isCoinTossed ?
                <>
                    <p>This is the result</p>
                    <h3>The coin was tossed: {result[0] + result[1]} times</h3>
                    <h3>Showed heads: {result[0]} times</h3>
                    <h3>Showed tails: {result[1]} times</h3>
                    <h3>So, you got heads with a probability: {result[2]} % </h3>
                    <h3>And you got heads with a probability: {result[3]} %</h3>
                    <h3>The calculation took: {result[4]} ms </h3>
                </>
                : <h1>Toss the coin</h1>}

        </React.Fragment>
    );
}

export default Result;