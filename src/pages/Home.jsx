import { ToDoCounter, ToDoSearch  } from "../components/Header/main";
import { AddToDo , ToDoList , AddModal } from "../components/Body/main";
import { Box, Container, createTheme, ThemeProvider } from '@mui/material/';
import { useEffect, useState } from "react";


const theme = createTheme({
  typography:{
    fontFamily:['Secular One']
  }
})


function Home() {

  
const array = [
  {
   
    text: "Tomar agua",
    completed: false,
  },
  {
    
    text: "Comer Frutas",
    completed: true,
  },
  {
    
    text: "Beber cerveza",
    completed: true,
  },
  {
    
    text: "Otra cosa",
    completed: true,
  }
];

  const [toDoTask, setToDoTask] = useState();
  const [input , setInput] = useState();
  const [modal, setModal] = useState(false);
  const [list , setList] = useState();
 useEffect(() =>{
    setList(JSON.parse(localStorage.getItem("task")));
 },[list])
  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="sm" sx={{
      maHeight:"40rem"
    }}>
    <Box  sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      border:"solid black",
      height:"100%"
      
      
    }}>
      <ToDoCounter toDos={array} />
      <ToDoSearch setInput={setInput}/>
      <ToDoList inputSearch={input} setList={setList} list={list}/>
    </Box>
      <AddToDo modal={modal} setModal={setModal} setToDoTask={setToDoTask} toDoTask={toDoTask}/>
  
    </Container>
    </ThemeProvider>
  );
}

export { Home };
