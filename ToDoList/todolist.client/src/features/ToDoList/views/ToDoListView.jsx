import { Box, Typography } from "@mui/material"
import { useState } from "react";
import CardItem from './../components/CardItem.jsx';
import { CheckboxRadio } from './../components/CheckboxRadio.jsx';
import { CheckboxDestacar } from './../components/CheckboxDestacar';
import { EditBtn } from './../components/EditBtn';
import { DeleteBtn } from './../components/DeleteBtn';

const ToDoListView = ({ rows }) => {

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
  return (
    <Box className='flex flex-col flex-wrap gap-2 max-w-sm my-3'>
      <Typography variant="h6" className="text-slate-500 !text-base">POR HACER</Typography>
      <CardItem
      >
        <div className='flex items-center'>
          <CheckboxRadio />
          <Typography>Prueba test 1</Typography>
        </div>

        <div className="flex items-center">
          <CheckboxDestacar />
          <EditBtn />
          <DeleteBtn />
        </div>
      </CardItem>
    </Box>
  )
}
export default ToDoListView
