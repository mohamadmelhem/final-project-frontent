import Popup from "../layout/Popup";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import './AddResortPop.css'


const AddBangaloPop = (props) => {
    return (
        <div className="edit-bangalouser">

        <Popup close={props.handleClose}>
            <h2>Add Bangalo </h2>
            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    margin:'0 auto'
                    
                  }}
        >
            <TextField fullWidth label="name" id="name" />
            <TextField fullWidth label="phone" id="phone" type="number"  />
            <TextField fullWidth label="space" id="space" />
            <TextField fullWidth label="description" id="description" />
            <TextField fullWidth label="Price Per Night" id="pricePerNight" />
            <TextField fullWidth label="id Tourist Resort" id="idTouristResort" />
            <FormGroup>
                <FormControlLabel label="Show"  control={<Switch style={{ color: '#e6d168' }} />}  />
            </FormGroup>
            <input
                fullWidth
                id="images"
                type="file"
                multiple
            /><br />
            <Button variant="contained" disableElevation>
                Add Resort
            </Button>

        </Box>
    </Popup>
    </div >
    )
}
export default AddBangaloPop;