import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import Form from './components/coinToss/Form';
import Result from './components/coinToss/Result';
//import { FunctionalProvider } from './FunctionalContext';

function App() {

  
  const [input, setInput] = useState(0);
  const [result, setResult] = useState([]);

  const tossCoin = () => {
   /*  let sum = 0;
    for(let i=0; i<10; i++){
      sum= sum+i;
      console.log(sum);
    }

    setResult(sum + parseInt(input) ); */
    var heads=0, tails=0;
    
let t0= performance.now();
    for(let i=0; i<input; i++){
      let x=Math.floor(1000*Math.random());
      if(x%2===0){
        heads++;
      }
      else if(x%2===1){
        tails++;
      }
      console.log("Coin tossed " + i + " times")
    }
    let t1= performance.now();
    console.log(heads, tails)
    setResult([heads, tails, input? 100*heads/input: "Error",  input? 100*tails/input: "Error", t1-t0]);
    console.log(result[0], result[1], result[2])

    return result;

  } 


  return (
    <React.Fragment>
     {/*  <FunctionalProvider> */}
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Form setInput={setInput} input={input} tossCoin={tossCoin} />
            </div>
            
          </div>
          <div className="row">
            <Result input={input} result={result} />
            
            
          </div>

        </div>
     {/*  </FunctionalProvider> */}

    </React.Fragment>
  );
}

export default App;
