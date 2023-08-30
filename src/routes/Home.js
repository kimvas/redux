import React, { useState } from "react";
import {connect} from "react-redux";
import { add } from "../store";
import ToDo from "../ToDo";
import { json } from "react-router-dom";


const Home = ({toDos,addToDo}) => {

    const [text,setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
    }


    const onSubmit = (e) =>{
        e.preventDefault();
        addToDo(text);
        setText("");  
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button>Add</button>
            </form>

            <ul>
                {toDos.map(toDo =>
                    <ToDo {...toDo} key={toDo.id} />
                )}
            </ul>
        </>
    )
}

// store에서 state값을 가져옴
function mapStateToProps(state) {
    return {toDos : state}
}

// store에 dispatch로 연결해줌
function mapDispatchToProps(dispatch) {
    return {
        addToDo : text => dispatch(add(text))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Home);