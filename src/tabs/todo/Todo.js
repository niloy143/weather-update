import React, { useEffect } from 'react';

const Todo = () => {

    useEffect(() => {
        document.title = "To Do";
    }, [])
    return (
        <div>
            this is todo
        </div>
    );
};

export default Todo;