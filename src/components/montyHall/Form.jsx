import React, { useEffect } from 'react';

const Form2 = ({ input2, setInput2, result2, setResult2, setIsShowDone, isChangeable, doors, setDoors }) => {

    /*   useEffect(()=>{
          console.log("Param is ", param1)
      },[]) */
    const handleChange = (e) => {
        setInput2(e.target.value);
        console.log(input2)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("doors ", doors)
        console.error("Number of doors is ", doors)
        if (input2) {
            setIsShowDone(true);
            PickDoor();
            return;
        }
        return setIsShowDone(false);
    }

    const handleDoorsChange = (e) => {
        setDoors(e.target.value);

    }

    const PickDoor = () => {
        console.log("PickDoor function was called")

        let success = 0, failure = 0, withSwitchSuccess = 0, withSwitchFailure = 0;

        let t0 = performance.now();
        /* Perform show as many times as input2 */
        for (let i = 0; i < input2; i++) {
            let ar = [];
            //assign random values to doors
            let carIndex = Math.floor(doors * Math.random());
           
            //the bigger value is the car
            for (let i = 0; i < doors; i++) {
                if (i === carIndex) {
                    ar[i] = "car"
                }
                else {
                    ar[i] = "goat"
                }
            }
            console.log("after getting string values ", ar)
            //Take(choose) one door
            let choiceIndex = Math.floor(doors * Math.random())
            let choice = ar[choiceIndex]

            if (choice === "car") {
                success++;
                console.log("Success is ", success)
            } else {
                failure++;
                console.log("failure is", failure)
            }

            //Put the remaining options in unknown doors
            let unknownDoors = [];
            for (let j = 0; j < doors; j++) {
               /*  if (choiceIndex !== j){
                    unknownDoors.push(ar[j])
                }
                else{
                    continue;
                } */
                if (choiceIndex === j) {
                    continue;
                } else {
                    unknownDoors.push(ar[j])
                }
            }

            /* the presenter opens a door, If it's the "goat" it is revealed(stops to be unknown and removed from unknownDoors).
             but it can NOT be the "car" */
            /* for (let j = 0; j < doors; j++) {
                if (unknownDoors[j] === "goat") {
                    unknownDoors.splice(j, 1);
            
                }
                else if (unknownDoors[j] === "car") {
                    continue;
                }
            } */
            let filteredDoor = unknownDoors.filter(x=>x==="car").map(x=>x)
            /* Switch happens. That means that the contestant takes the remaining door.
            So, if the remaining unknown door contains the car, it is success, else it is failure  */
            if (filteredDoor[0] === "car") {
                withSwitchSuccess++;
            } else {
                withSwitchFailure++;
            }
            console.log("uknown doors", unknownDoors)
            console.log("filtered door", filteredDoor)
        }

        let t1 = performance.now();

        let successPercent = 100 * success / (success + failure);
        let failurePercent = 100 * failure / (success + failure);
        let withSwitchSuccessPercent = 100 * withSwitchSuccess / (success + failure)
        let withSwitchFailurePercent = 100 * withSwitchFailure / (success + failure)
        let executionTime = t1 - t0;

        console.log("Success without switch is ", success, successPercent)
        console.log("Failure without switch is ", failure, failurePercent)
        console.log("Success with switch is ", withSwitchSuccess, withSwitchSuccessPercent)
        console.log("Failure with switch is ", withSwitchFailure, withSwitchFailurePercent)

        setResult2([success, failure, input2 ? successPercent : "Undefined", input2 ? failurePercent : "Undefined", withSwitchSuccess,
            withSwitchFailure, input2 ? withSwitchSuccessPercent : "Undefined", input2 ? withSwitchFailurePercent : "Undefined",
            executionTime])
        return result2;
    }

    return (
        <React.Fragment>
            <h1>This is Monty Hall form</h1>
            <form>
                <input type="number" name="input" onChange={handleChange} className="form-control"
                placeholder="How many times to run the Show?" >
                </input>
                {isChangeable ? <input type="number" name="doors" placeholder="Number of doors" onChange={handleDoorsChange}
                className="form-control">
                </input> :
                    null}
                <button className="btn btn-warning"
                    onClick={handleSubmit}
                >Run the Show</button>
            </form>
        </React.Fragment>
    );
}

export default Form2;