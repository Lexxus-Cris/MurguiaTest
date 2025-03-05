import { Box, Paper } from "@mui/material"

const CardItem = ({destacada = false, children}) => {
    return (
        <Paper className={`w-full ${destacada ? '!bg-amber-100' : ''}`} >
            <Box className='flex items-center justify-between px-4'>
                {children}
            </Box>
        </Paper>
    )
}
export default CardItem
