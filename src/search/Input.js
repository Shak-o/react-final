import React, { useState } from 'react';

const Input = () => {
    const [input, setInput] = useState('');
    //const dispatch = useDispatch();
    const check = () => {
        console.log(input);
    };
    return (
        <form className="d-flex ">
            <input
                className="form-control me-2"
                placeholder="Search"
                aria-label="Search"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                className="btn btn-outline-success"
                type="submit"
                onClick={check}>
                Search
            </button>
        </form>
    );
};

export default Input;
