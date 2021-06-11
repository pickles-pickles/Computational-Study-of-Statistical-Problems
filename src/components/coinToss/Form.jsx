import React from "react";

const Form = ({ setInput, tossCoin, input, setIsCoinTossed }) => {
    //setInput(50);
    const handleChange = (e) => {
        setInput(e.target.value);
        console.log(input)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsCoinTossed(true);
        tossCoin();
    }

    return (
        <React.Fragment>
            This is the form
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
                >Start simulation</button>
            </form>

        </React.Fragment>
    );
}

export default Form;