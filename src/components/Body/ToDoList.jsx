import { useState } from "react";
import { Container } from "@mui/material";
import { ToDoItem } from "./ToDoItem";
import { useEffect } from "react";
import { handleSearch } from "../utils/handleSearch";

function ToDoList({inputSearch}){

      const [list , setList] = useState(JSON.parse(localStorage.getItem("task")));

    useEffect(() => {
        handleSearch(inputSearch,setList,list)
    },[inputSearch]);
    console.log(list);
    return (
        <Container sx={{
            margin:"1.5rem 0 3rem 0"
        }}>
        {list?.map((item,index) =>(
            <ToDoItem key={index} text={item.text} completed={item.completed} />
        ) )}
        
        </Container>
    )
};

export {ToDoList};