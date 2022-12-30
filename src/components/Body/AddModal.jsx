import { Button, TextField } from "@mui/material";
import { useState } from "react";

function AddModal ({toDos}) {

    const [input , setInput] = useState({})

    const handleTextField = (e) => {
        setInput({
            "text":e.currentTarget.value,
            "completed":false
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.text.length > 0){
            toDos.push(input)
            console.log(input)
        }
    };



    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField onChange={handleTextField} />
                <Button type="submit">Add</Button>
            </form>
        </>
    )
};

export { AddModal };