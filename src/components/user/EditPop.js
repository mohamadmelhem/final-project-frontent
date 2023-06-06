import Popup from "../layout/Popup";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import axios from "axios";

const EditBangaloPop = (props) => {
    const bangaloId = props.bangaloId;
    const [data, setData] = useState({})
    useEffect(() => {
        // setIsLoading(true)
        axios.get(`https://hjezli-backend.onrender.com/houses/${bangaloId}`)
            .then(response => {
                setData(response.data.data);
                // setIsLoading(false)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({
          ...prevData,
          [name]: value
        }));
      };
      const editHandler=()=>{
        axios.put(`https://hjezli-backend.onrender.com/houses/${data.idTouristResort._id}`)
        .then(response => {
            console.log(response.data)
            // setIsLoading(false)
        })
        .catch(error => {
            console.log(error);
        });
      }
    return (
        <div className="edit-bangalouser">
          { data && <Popup close={props.handleClose}>
                <h2>Edit Bangalo </h2>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        margin: '0 auto'

                    }}
                >
                    <TextField fullWidth
                    value={data.name}
                    onChange={handleChange}
                    name="name"
                        id="name" />
                    <TextField fullWidth
                    value={data.phone}
                    onChange={handleChange}
                    name="phone"
                        id="phone"
                        type="number" />
                    <TextField fullWidth
                    value={data.space}
                    onChange={handleChange}
                    name="space"
                        id="space" />
                    <TextField fullWidth
                    value={data.description}
                    onChange={handleChange}
                    name="description"
                        id="description" />
                    <TextField fullWidth
                    value={data.pricePerNight}
                    onChange={handleChange}
                    name="pricePerNight"
                        id="pricePerNight" />
 
                    <FormGroup>
                        <FormControlLabel label="Show" control={<Switch style={{ color: '#e6d168' }} />} />
                    </FormGroup>
                    <input
                        fullWidth
                        id="images"
                        type="file"
                        multiple
                    /><br />
                    <Button variant="contained" onClick={editHandler} disableElevation>
                        Add Resort
                    </Button>

                </Box>
            </Popup>}
        </div >
    )
}
export default EditBangaloPop;