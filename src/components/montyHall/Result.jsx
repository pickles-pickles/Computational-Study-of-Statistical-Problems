import React from 'react';

const Result2 = ({ isShowDone, result2 }) => {
    return (
        <React.Fragment>
            {isShowDone ?
                <>
                    <h1>This is Monty Hall result</h1>
                    <h3>The Monty Hall show was performed {2*result2[0] + 2*result2[1]} times</h3>
                    <h3> {result2[0] + result2[1]} times you insisted on your initial choice, while {result2[0] + result2[1]} you changed your mind</h3>
                    <h2>You did NOT change door:</h2>
                    <h3>and found the car {result2[0]} times</h3>
                    <h3>and found the goat {result2[1]} times</h3>
                    <h3>So, you found the car with a probability: {result2[2]}</h3>
                    <h3>So, you found the goat with a probability: {result2[3]}</h3>
                    <h2>You changed door:</h2>
                    <h3>and found the car {result2[4]} times</h3>
                    <h3>and found the goat {result2[5]} times</h3>
                    <h3>So, you found the car with a probability: {result2[6]}</h3>
                    <h3>So, you found the goat with a probability: {result2[7]}</h3>
                    <h3>The calculation took: {result2[8]} ms </h3>
                </>
                : <h1>Take part in the Monty Hall Show</h1>}
        </React.Fragment>
    );
}

export default Result2;