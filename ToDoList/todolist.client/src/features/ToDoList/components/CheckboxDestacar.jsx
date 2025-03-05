import { Star, StarOutline } from "@mui/icons-material"
import { Checkbox, IconButton } from "@mui/material"


export const CheckboxDestacar = () => {
    return (
        <IconButton>
            <Checkbox
                slotProps={{ root: { className : '!contents'}}}
                edge='start'
                tabIndex={-1}
                disableRipple
                icon={<StarOutline />}
                checkedIcon={<Star color="warning" />}
            />
        </IconButton>
    )
}
