import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../Redux/reducer';


const mapStateToProps = (state) =>{
        return {
            todo:state,
        };
    }

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo:(obj) => dispatch(addTodo(obj)),
    }
}

const ToDo = (props) => { 

    const [todo,setTodo]=useState("")

    const handleChange = (e) =>{
        setTodo(e.target.value)
    }

    const add = () =>{
        if(todo == ""){
            alert("Input is Empty")
        }else{
            props.addTodo({
            id:Math.floor(Math.random()*100),
            item:todo,
            completed:false,
        })
        setTodo("");
        }
        console.log()
    }
    return (
    <div>
        <div className='todo ps-5'>ToDo List</div>
            <div className6='container-fluid'>
                <div className='mb-4 home'>ToDo List</div>
            <div className="row">
                <div className='offset-3 col-6'>
            <input type="text" onChange={handleChange} placeholder='New Task' className='form-control todo-input' value={todo}/>
                </div>
                <div className='col-3'>
                    <button className='btn btn-primary add-btn' onClick={()=> add()}>Add</button>
                    
                </div>
            </div>
        </div>
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo)