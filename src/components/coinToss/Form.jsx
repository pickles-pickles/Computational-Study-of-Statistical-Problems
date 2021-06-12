import React from "react";

const Form = ({ setInput, result, setResult, input, setIsCoinTossed }) => {
    //setInput(50);
    const handleChange = (e) => {
        setInput(e.target.value);
        console.log(input)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsCoinTossed(true);
        tossCoin();
    };

    const tossCoin = () => {

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
            <h1>How many times toss the coin? Fill in the input</h1>
            {/* <select className="form-control" ref="selectRef">
                <option value="10">10</option>
                <option value="10">50</option>
                <option value="10">100</option>
                <option value="10">1000</option>
            </select> */}
            <form>
                <input type="number" name="input" onChange={handleChange}>
                </input>
                <button className="btn btn-warning"
                    onClick={handleSubmit}
                >Toss the coin</button>
            </form>

        </React.Fragment>
    );
}

export default Form;