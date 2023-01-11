import { useState } from "react";
import { Button, IconButton, Modal, TextField, Typography } from "@mui/material";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { Box, Container } from "@mui/system";
import { handleModal } from "../utils/handleModal";
import { handleAddtask } from "../utils/handleAddTask";


function AddToDo({modal,setModal,setToDoTask,toDoTask}){

const handleSubmit = (e) => {
e.preventDefault();
let items = JSON.parse(localStorage.getItem("task"));
if(toDoTask.length === 0){
    console.log("Tiene que agregar una tarea")
} else {
items.push(toDoTask);
localStorage.setItem("task",JSON.stringify(items));
console.log(JSON.parse(localStorage.getItem("task")))
}
setModal(false);
}

   
    return (
        <>
        <Container p="0" sx={{
        display:"flex",
        justifyContent:"flex-end",
        position:"relative",
        bottom:"5.2rem",
        left:"2rem"
        }} style={{padding:0}}>
        <Box sx={{
            position:"relative",
            maxWidth:"min-content",
            }}>
        <IconButton color="primary" >
        <AddCircleRoundedIcon onClick={() => handleModal(modal,setModal)}  sx={{
            fontSize:100
        }}/> 
        <Modal
        open={modal}
        sx={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        }}
        >
    
            <Box sx={{
                border: "solid black",
                padding:"3rem 7rem 3rem 7rem",
                background:"white",
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
            }}>
                <TextField
                 autoComplete="false"
                 variant="outlined"
                 size="large"
                 placeholder="Add a new task..."
                 onChange= {(e) => handleAddtask(e, setToDoTask)}
                 fullWidth
                 sx={{
                    margin:"0 5rem 0 5rem"
                 }}/>
                <Box sx={{
                    display:"flex",
                    alignItems:"center"
                              
                }}>
                <Button
                onClick={handleSubmit}
                variant="outlined" sx={{
                    padding:"0.5rem",
                    margin:"0.5rem"
            }} type={"submit"} >Add</Button>
                <Button variant="outlined" sx={{
                    padding:"0.5rem"}} onClick={() => handleModal(modal,setModal)}>Cancel</Button>
                </Box>
            
                </Box>
             
        

        </Modal>

        </IconButton>    
        </Box>
        </Container>
        </>
    )
};

export {AddToDo};