
import { RadioButtonChecked, RadioButtonUnchecked } from '@mui/icons-material';
import { Checkbox, IconButton } from '@mui/material';

export const CheckboxRadio = () => {
    return (
        <IconButton>
            <Checkbox
                slotProps={{ root: { className : '!contents'}}}
                edge='start'
                tabIndex={-1}
                disableRipple
                icon={<RadioButtonUnchecked />}
                checkedIcon={<RadioButtonChecked />}
            />
        </IconButton>
    )
}
