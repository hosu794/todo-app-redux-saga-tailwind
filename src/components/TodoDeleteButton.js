import React from 'react';

const TodoDeleteButton = ({onClick}) => {
    return (
     <button className="text-white absolute bottom-3 right-6 bg-red-500 md:bg-red-500 rounded-lg py-3 px-6 ring-4 ring-red-500 ring-opacity-50" onClick={onClick}>Delete Todo</button>
    )
}

export default TodoDeleteButton;