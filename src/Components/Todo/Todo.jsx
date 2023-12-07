import React, { Fragment, useState } from 'react';

const Todo = () => {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState('');
    const [count, setValue] = useState(0);

    const handlePost = (e) => {
        const upTodo = e.target.value;
        const upWarning = upTodo.includes('js') ? 'js included which means JavaScript' : null; 
        setTodo(upTodo);
        setWarning(upWarning);
    };
    return (
        <Fragment>
            <div className='todoMain'>
                <h1>output is: {todo}</h1>
                <br />
                <textarea
                    name='todo'
                    value={todo}
                    onChange={handlePost}
                    cols='30'
                    rows='10'
                    placeholder='type your thing'
                ></textarea>
                <hr />
                <h2>this is: {warning || 'Fine Enough'}</h2>
                <h3>{count}</h3>
                <button id='btn' onClick={()=>{setValue((prev) => (prev === 6) ? 0 : prev + 1)}}>
                    Click
                </button>
            </div>
        </Fragment>
    );
};

export default Todo;
