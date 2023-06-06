import Popup from "../layout/Popup";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';

const EditResortPop=(props)=>{
  
  
    return(
             <div className="add-resortpop">
        <Popup close={props.handleClose}>
            <h2>Edit Resort </h2>
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
            <TextField fullWidth label="rating" id="rating" type="number" inputProps={{   min: 1,  max: 5,}} />
            <TextField fullWidth label="location" id="location" />
            <TextField fullWidth label="description" id="description" />
            <TextField fullWidth label="idUser" id="idUser" />
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
                Edit Resort
            </Button>

        </Box>
    </Popup>
    </div >
    )
}
export default EditResortPop;