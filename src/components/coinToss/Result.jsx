import React from 'react';
//import {Functional} from '../../FunctionalContext'

const Result = ({ isCoinTossed, result, isCoinInAir }) => {
    //const value = useContext(Functional);

    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    {isCoinInAir ?
                        <h1>Calculating ...</h1> :
                        <>
                            <p>This is the result</p>
                            <h3>The coin was tossed: <span className="green">{result[0] + result[1]}</span> times</h3>
                            <h3>Showed <span className="green">heads</span>: <span className="green">{result[0]}</span> times</h3>
                            <h3>Showed <span className="green">tails</span>: <span className="green">{result[1]}</span> times</h3>
                            <h3>So, you got <span className="green">heads</span> with a probability: <span className="green">{result[2]}</span> % </h3>
                            <h3>And you got <span className="green">tails</span> with a probability: <span className="green">{result[3]}</span> %</h3>
                            <h3>The calculation took: {result[4]} ms </h3>
                        </>
                    }

                </div>
            </div>

        </React.Fragment>
    );
}

export default Result;