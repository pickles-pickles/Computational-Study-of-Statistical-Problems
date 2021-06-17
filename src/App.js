import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import Form from './components/coinToss/Form';
import Result from './components/coinToss/Result';
//import { FunctionalProvider } from './FunctionalContext';
import Form2 from './components/montyHall/Form';
import Result2 from './components/montyHall/Result';

function App() {


  const [input, setInput] = useState(0);
  const [result, setResult] = useState([]);
  const [isCoinTossed, setIsCoinTossed] = useState(false);

  const [input2, setInput2] = useState(0);
  const [result2, setResult2] = useState([]);
  const [isShowDone, setIsShowDone] = useState(false);


  return (
    <React.Fragment>
      {/*  <FunctionalProvider> */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Form setInput={setInput} input={input} result={result} setResult={setResult}
              setIsCoinTossed={setIsCoinTossed} />
          </div>

        </div>
        <div className="row">
          <Result input={input} result={result} isCoinTossed={isCoinTossed} />
        </div>
        <div className="row">
          <Form2 input2={input2} setInput2={setInput2} result2={result2} setResult2={setResult2}
            setIsShowDone={setIsShowDone}
          />
        </div>
        <div className="row">
          <Result2 isShowDone={isShowDone} result2={result2} />
        </div>

      </div>
      {/*  </FunctionalProvider> */}

    </React.Fragment>
  );
}

export default App;
