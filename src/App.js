import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import Form from './components/coinToss/Form';
import Result from './components/coinToss/Result';
//import { FunctionalProvider } from './FunctionalContext';
import Form2 from './components/montyHall/Form';
import Result2 from './components/montyHall/Result';
import InfoModal from './components/Modal';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [input, setInput] = useState(0);
  const [result, setResult] = useState([]);
  const [isCoinTossed, setIsCoinTossed] = useState(false);
  const [ isCoinInAir, setIsCoinInAir] = useState(false)

  const [input2, setInput2] = useState(0);
  const [result2, setResult2] = useState([]);
  const [isShowDone, setIsShowDone] = useState(false);
  const [doors, setDoors] = useState(0)

  const maxReps =1000000;
  const maxDoors = 10000;

  return (
    <React.Fragment>
      {/*  <FunctionalProvider> */}
      <div className="container">
        {isModalOpen? <InfoModal setIsModalOpen={setIsModalOpen} /> :
        null }

        <div className="row">
          <div className="col-12">
            <Form setInput={setInput} input={input} result={result} setResult={setResult}
              setIsCoinTossed={setIsCoinTossed} setIsCoinInAir={setIsCoinInAir} maxReps={maxReps} />
          </div>

        </div>
        <div className="row">
          
            <Result input={input} result={result} isCoinTossed={isCoinTossed} isCoinInAir={isCoinInAir}
             maxReps={maxReps} /> 
           
         
        </div>
          
        <div className="row">
          <Form2 input2={input2} setInput2={setInput2} result2={result2} setResult2={setResult2}
            setIsShowDone={setIsShowDone} isChangeable={true} doors={doors} setDoors={setDoors}
            maxReps={maxReps} maxDoors={maxDoors}
          />
        </div>
        <div className="row">
          <Result2 isShowDone={isShowDone} result2={result2} input2 = {input2} doors={doors}
          maxReps={maxReps} maxDoors={maxDoors} />
        </div>

      </div>
      {/*  </FunctionalProvider> */}

    </React.Fragment>
  );
}

export default App;
