import React from 'react';

const Form2 = ({ input2, setInput2, result2, setResult2, setIsShowDone }) => {
    const handleChange = (e) => {
        setInput2(e.target.value);
        console.log(input2)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input2){
            setIsShowDone(true);
        PickDoor();
        return;
        }
        return setIsShowDone(false);
    }

    const PickDoor = () => {
        console.log("PickDoor function was called")

        let success = 0, failure = 0, withSwitchSuccess = 0, withSwitchFailure = 0;

        let t0 = performance.now();

        for (let i = 0; i < input2; i++) {
            let ar = [];
            //assign random values to doors
            for (let i = 0; i <= 2; i++) {
                ar[i] = Math.random();
            };
            console.log(ar);
            let a = ar[0], b = ar[1], c = ar[2];
            //the bigger value is the car
            for (let i = 0; i <= 2; i++) {
                if (ar[i] === Math.max(a, b, c)) {
                    ar[i] = "car"
                }
                else {
                    ar[i] = "goat"
                }
            }
            console.log("after getting string values ", ar)
            //Take(choose) one door
            let choiceIndex = Math.floor(3 * Math.random())
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
            for (let j = 0; j <= 2; j++) {
                if (choiceIndex === j) {
                    continue;
                } else {
                    unknownDoors.push(ar[j])
                }
            }

            /* the presenter opens a door, If it's the "goat" it is revealed(stops to be unknown and removed from unknownDoors).
             but it can NOT be the "car" */
            for (let j = 0; j <= 2; j++) {
                if (unknownDoors[j] === "goat") {
                    unknownDoors.splice(i, 1);
                    break;
                }
                else if (unknownDoors[j] === "car") {
                    continue;
                }
            }
            /* Switch happens. That means that the contestant takes the remaining door.
            So, if the remaining unknown door contains the car, it is success, else it is failure  */
            if (unknownDoors[0] === "car") {
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

        console.log("Success without switch is ", success, successPercent)
        console.log("Failure without switch is ", failure, failurePercent)
        console.log("Success with switch is ", withSwitchSuccess, withSwitchSuccessPercent)
        console.log("Failure with switch is ", withSwitchFailure, withSwitchFailurePercent)

        setResult2([success, failure, input2 ? successPercent : "Undefined", input2 ? failurePercent : "Undefined", withSwitchSuccess,
            withSwitchFailure, input2 ? withSwitchSuccessPercent : "Undefined", input2 ? withSwitchFailurePercent : "Undefined",
            executionTime])
        return result2;
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