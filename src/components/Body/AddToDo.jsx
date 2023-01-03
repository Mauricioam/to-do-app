import { useState } from "react";
import { Button, IconButton, Modal, TextField, Typography } from "@mui/material";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { Box, Container } from "@mui/system";
import { handleModal } from "../utils/handleModal";


function AddToDo({modal,setModal}){


    const [input, setInput] = useState();

    const handleTask = (event) =>{
            event.preventDefault();


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
            <form >
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
                 fullWidth
                 sx={{
                    margin:"0 5rem 0 5rem"
                 }}/>
                <Box sx={{
                    display:"flex",
                    alignItems:"center"
                              
                }}>
                <Button variant="outlined" sx={{
                    padding:"0.5rem",
                    margin:"0.5rem"
            }} type={"submit"}>Add</Button>
                <Button variant="outlined" sx={{
                    padding:"0.5rem"}} onClick={() => handleModal(modal,setModal)}>Cancel</Button>
                </Box>
            
            </Box>
                </form>
        

        </Modal>

        </IconButton>    
        </Box>
        </Container>
        </>
    )
};

export {AddToDo};