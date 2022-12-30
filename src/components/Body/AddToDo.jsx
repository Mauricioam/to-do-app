import { IconButton } from "@mui/material";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { Box, Container } from "@mui/system";


function AddToDo(){

    const handleAddToDo = () => {
   
    }
          
                

    


    return (
        <Container p="0" sx={{
        display:"flex",
        justifyContent:"flex-end",
        position:"relative",
        bottom:"3.8rem",
        left:"1.5rem"
        }} style={{padding:0}}>
        <Box sx={{
            position:"relative",
            maxWidth:"min-content",
            }}>
        <IconButton onClick={handleAddToDo} color="primary">
        <AddCircleRoundedIcon  sx={{
            fontSize:70
        }}/>    
        </IconButton>    
        </Box>
        </Container>
    )
};

export {AddToDo};