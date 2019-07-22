import React, { Component } from 'react'
import Todo from './Todo';


class TodoForm extends Component {


    constructor(props) {
        super(props)

        this.state = {
            item: '',
            editStatus: false,
            e_item: '',
            editIndex: '',
            data: [],
            picture:[]
        }
    }


    handleItemChange = (event) => {

        this.setState({
            item: event.target.value
        })
    }


    handleeItemChange = (event) => {

        this.setState({
            e_item: event.target.value
        })
    }

    addTask = (event) => {

        event.preventDefault();


        let { item, data, editStatus, editIndex } = this.state;

        let tasks = {
            item,
            editStatus,
        }

        data.push(tasks)



        this.setState({
            data,
            item: '',
            editStatus: false,
        })


    }


    handleOnDelete = (index, event) => {


        let { item, data } = this.state;

        let task = this.state.data;

        data.splice(index, 1);

        this.setState({
            data: data
        });

    };

    handleOnEdit = (index) => {

        // let data = this.state.data.map((todo, e_index) =>
        //     e_index === index ? {...todo, editStatus: true} : todo,
        // );

        // this.setState({ data })

        let { item, data, editStatus, editIndex, e_item } = this.state;

        this.setState({
            editStatus: true,
            editIndex: index,
            item: data[index].item
        })

        //const data = data[index]
    }

    saveTask = () => {

        let { item, data, editStatus, editIndex, e_item } = this.state;

        let tasks = {
            item,
            editStatus
        }

        data[editIndex] = tasks

        this.setState({
            item: '',
            editStatus: false
        })


    }



    render() {

        const taskList = this.state.data.map((task, index) => <Todo task={task} index={index} handleOnDelete={this.handleOnDelete} handleOnEdit={this.handleOnEdit}/> )

        return (
            <div>
                <h1>TASKS</h1>
                <div>
                    {/* todo form */}
                    <label>Enter your tasks </label>
                    <input type='text' value={this.state.item} onChange={this.handleItemChange}></input>{
                        this.state.editStatus ? (

                            <button onClick={this.saveTask}>Save</button>
                        ) : (
                                <button onClick={this.addTask}>Submit</button>
                            )
                    }
                </div>

                {taskList}
                <div>
                    {/* todo list */}

                    <ul>

                        {/* {this.state.data.map((todo, index) => {
                            return (

                                <li>
                                    <div>


                                      {taskList}

                                        <button onClick={(event) => this.handleOnDelete(index, event)}> Delete</button>
                                        <button onClick={() => this.handleOnEdit(index)}> Edit</button>

                                    </div>
                                </li>
                            )
                        })} */}

                    

                    </ul>

                </div>
            </div>
        )
    }
}

export default TodoForm
