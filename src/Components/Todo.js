import React, { Component } from 'react'

class Todo extends Component {




    render() {
        const { task,handleOnDelete ,index, handleOnEdit} = this.props
        return (
     
            <div className='slide-in-top'>
                <ul>
                    <li>
                        {task.item}
                        <button onClick={(event) =>handleOnDelete(index)}> Delete</button>
                        <button onClick={() =>handleOnEdit(index)}> Edit</button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Todo
