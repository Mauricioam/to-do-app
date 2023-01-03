import {Box, Typography} from '@mui/material/';
import { useState } from 'react';

function ToDoCounter({toDos}){


const handleCompleted = () => {

}
    return (
        <Box>
        <Typography variant='h4' padding={"1.5rem"}>
        Completaste  {toDos.length} de 
        </Typography>
        </Box>
    )
};

export {ToDoCounter};