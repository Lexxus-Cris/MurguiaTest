import {  Box, Paper, Typography } from "@mui/material"
import { useState } from "react";
import { CheckboxCompleted } from "../components/CheckboxCompleted";
import { DeleteBtn } from "../components/DeleteBtn";
import CardItem from "../components/CardItem";

const CompletedListView = () => {
    const [checked, setChecked] = useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
        newChecked.push(value);
        } else {
        newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const editTodo = () => {
        
    }
    return (
        <Box className='flex flex-wrap flex-col gap-2 max-w-sm my-3'>
            <Typography variant="h6" className="text-slate-500 !text-base">COMPLETADAS</Typography>
            <CardItem>
                <div className="flex items-center">
                    <CheckboxCompleted />
                    <Typography>Prueba test 1</Typography>
                </div>
                <DeleteBtn />
            </CardItem>
            <CardItem>
                <div className="flex items-center">
                    <CheckboxCompleted />
                    <Typography>Prueba test 1</Typography>
                </div>
                <DeleteBtn />
            </CardItem>
        </Box>
    )
}
export default CompletedListView
