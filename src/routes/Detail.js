import React from "react";
import {connect , useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import { deleteToDo } from "../store";

const Detail = () => {
    
    const todo = useSelector((state) => state);
    const id = useParams().id;
    const todoText = todo.find((todo) => todo.id === parseInt(id))
    console.log(todoText)
    return (
        <>
        
        </>
    )
}


export default Detail;