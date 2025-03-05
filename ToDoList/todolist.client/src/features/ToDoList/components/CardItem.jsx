import { Box, Paper } from "@mui/material"

const CardItem = ({children}) => {
    return (
        <Paper className="">
            <Box className='flex items-center justify-between px-4'>
                {children}
            </Box>
        </Paper>
    )
}
export default CardItem
