import React from 'react';

const Form2 = ({input2, setInput2,  result, setResult,}) => {
    const handleChange = (e) => {
        setInput2(e.target.value);
        console.log(input2)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //setIsCoinTossed(true);
        PickDoor();
    }

    const PickDoor = () => {
        console.log("PickDoor function was called")

        let success=0, failure=0;

        for(let i=0; i<input2; i++){
            let ar=[];
        //assign random values to doors
        for(let i=0;i<=2;i++){
            ar[i] = Math.random();
        };
        console.log(ar);
        let a=ar[0], b=ar[1], c=ar[2];
        //the bigger value is the car
        for(let i=0;i<=2;i++){
            if(ar[i]===Math.max(a,b,c)){
                ar[i]="car"
            }
            else{
                ar[i]="goat"
            }
        }
        console.log("after getting string values ",ar )
        let choiceIndex = Math.floor(3*Math.random())
        let choice = ar[choiceIndex]
        
            if(choice==="car"){
                success++;
                console.log("Success is ", success)
            } else{
                failure++;
                console.log("failure is", failure)
            }
        }
        console.log("Success is ", success, 100*success/(success+failure))
        console.log("Failure is ", failure, 100*failure/(success+failure))

        
    }
    

        /* let car=ar[0];
        for (let i=0; i<=2; i++){
            if(ar[i]>car){
                car=ar[i];
                ar[i]="car"
                
            } else if (ar[i]<=car){
                ar[i]="goat";
            }
        }
        car="car";
        console.log("after soert",ar) */

    return (
        <React.Fragment>
            <h1>This is Monty Hall form</h1>
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

export default Form2;