import React from 'react';

const Form2 = ({ input2, setInput2, result2, setResult2, setIsShowDone, doors, setDoors, maxReps, maxDoors }) => {

    const handleChange = (e) => {
        setInput2(e.target.value);
        console.log(input2)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input2 && input2<maxReps && doors< maxDoors) {
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
               
                if (choiceIndex === j) {
                    continue;
                } else {
                    unknownDoors.push(ar[j])
                }
            }

            /* the presenter opens a door, If it's the "goat" it is revealed(stops to be unknown and removed from unknownDoors).
             but it can NOT be the "car" */
           
            let filteredDoor = unknownDoors.filter(x=>x==="car").map(x=>x)

            /* Switch happens. That means that the contestant takes the remaining door.
            So, if the remaining unknown door contains the car, it is success, else it is failure  */
            if (filteredDoor[0] === "car") {
                withSwitchSuccess++;
            } else {
                withSwitchFailure++;
            }
        }

        let t1 = performance.now();

        let successPercent = 100 * success / (success + failure);
        let failurePercent = 100 * failure / (success + failure);
        let withSwitchSuccessPercent = 100 * withSwitchSuccess / (success + failure)
        let withSwitchFailurePercent = 100 * withSwitchFailure / (success + failure)
        let executionTime = t1 - t0;

        setResult2([success, failure, input2 ? successPercent : "Undefined", input2 ? failurePercent : "Undefined", withSwitchSuccess,
            withSwitchFailure, input2 ? withSwitchSuccessPercent : "Undefined", input2 ? withSwitchFailurePercent : "Undefined",
            executionTime])
        return result2;
    }

    return (
        <React.Fragment>
            <h1 className="mt-4">How many times to conduct the Monty Hall Show? And number of doors?</h1>
            <form>
                <input type="number" name="input" onChange={handleChange} className="form-control"
                placeholder="How many times to run the Show?" >
                </input>
                <input type="number" name="doors" placeholder="Number of doors" onChange={handleDoorsChange}
                className="form-control mt-1">
                </input> 

                <button className="btn btn-warning my-2"
                    onClick={handleSubmit}
                >Run the Show</button>
            </form>
        </React.Fragment>
    );
}

export default Form2;