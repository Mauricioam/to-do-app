import {Box, Typography} from '@mui/material/';

function ToDoCounter({toDos}){
    return (
        <Box>
        <Typography variant='h4' padding={"1.5rem"}>
        Completaste  {toDos.length} de la lista
        </Typography>
        </Box>
    )
};

export {ToDoCounter};