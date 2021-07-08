import React from 'react';
import Result from './Result';

const Card = ({isCoinInAir, isCoinTossed, result, input}) => {
    return ( 
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                   {isCoinInAir? <h1>Calculating ...</h1> : <Result input={input} result={result} isCoinTossed={isCoinTossed} /> }
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Card;