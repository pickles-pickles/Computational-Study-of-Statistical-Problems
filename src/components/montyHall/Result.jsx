import React from 'react';

const Result2 = ({ isShowDone, result2, input2, doors, maxReps, maxDoors }) => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    {isShowDone ?
                        <>
                            <h1>This is the Monty Hall result</h1>
                            <h3>The Monty Hall show was performed <span className="green">{2 * result2[0] + 2 * result2[1]}</span> times</h3> 
                            <h3> {result2[0] + result2[1]} times you insisted on your initial choice, while {result2[0] + result2[1]} you changed your mind</h3>
                            <h2>You did NOT change door:</h2>
                            <h3>and found the <span className="green">car</span>: <span className="green">{result2[0]}</span> times</h3>
                            <h3>and found the <span className="green">goat</span>: <span className="green">{result2[1]}</span> times</h3>
                            <h3>So, you found the <span className="green">car</span> with a probability: <span className="green">{result2[2]}</span></h3>
                            <h3>So, you found the <span className="green">goat</span> with a probability: <span className="green">{result2[3]}</span></h3>
                            <h2>You changed door:</h2>
                            <h3>and found the <span className="green">car</span>: <span className="green">{result2[4]}</span> times</h3>
                            <h3>and found the <span className="green">goat</span>: <span className="green">{result2[5]}</span> times</h3>
                            
                            <h3>So, you found the <span className="green">car</span> with a probability: <span className="green">{result2[6]}</span></h3>
                            <h3>So, you found the <span className="green">goat</span> with a probability: <span className="green">{result2[7]}</span></h3>
                            <h3>The calculation took: {result2[8]} ms </h3>
                        </>
                        : (input2>=maxReps || doors>=maxDoors ? <h1>This would take a lot of time ... Please, choose a number of reps that's less than {maxReps} and a doors numbers that doesn't exceed {maxDoors} , buddy ...</h1> :
                            <h1 className="blue">Take part in the Monty Hall Show</h1>) }
                             
                </div>
            </div>

        </React.Fragment>
    );
}

export default Result2;