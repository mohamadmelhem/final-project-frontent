import Popup from "../layout/Popup";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import './AddBangaloPop.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const AddBangaloPop = (props) => {
const resortId=useParams().id
    const [addBangalo, setAddBangalo] = useState({
        name: "",
        phone: "",
        location: "",
        pricePerNight: "",
        description: "",
    })


    const [images, setImages] = useState([])

    const handleChange = (e) => {
        const value = e.target.value
        setAddBangalo({ ...addBangalo, [e.target.name]: value })
    }

    const handleImage = (event) => {
        const fileList = event.target.files;
        const selectedImages = Array.from(fileList);
        setImages(selectedImages);
    };

    const handleAddBangalo = async (e) => {
        e.preventDefault()
        try {
            // const fd = new FormData()
            // fd.append("image", image, image.name)
            
            // const imgBBResponse = await axios.post("https://api.imgbb.com/1/upload?key=343aafd1de63e7ae4559173af3ff3bd2", fd)
            
            // const imageUrl = imgBBResponse.data.data.display_url
            
            // Upload images to ImgBB
            const imageArray = [];
            for (let i = 0; i < images.length; i++) {
                const file = images[i];

                const formData = new FormData();
                formData.append('image', file);
                formData.append('key', '343aafd1de63e7ae4559173af3ff3bd2');

                const imgBBResponse = await axios.post('https://api.imgbb.com/1/upload', formData);

                if (imgBBResponse.data && imgBBResponse.data.data && imgBBResponse.data.data.display_url) {
                    const imageUrl = imgBBResponse.data.data.display_url;
                    imageArray.push(imageUrl);
                }
            }
            const formData = new FormData()
            formData.append("image", imageArray)
            formData.append("name", addBangalo.name)
            formData.append("phone", addBangalo.phone)
            formData.append("space", addBangalo.space)
            formData.append("description", addBangalo.description)
            formData.append("pricePerNight", addBangalo.pricePerNight)
            formData.append("idTouristResort", resortId)

            const formDt = {
                images: imageArray,
                name: addBangalo.name,
                phone: addBangalo.phone,
                space: addBangalo.space,
                description: addBangalo.description,
                pricePerNight: addBangalo.pricePerNight,
                idTouristResort: resortId

            }

            const res = await axios.post(
                "https://hjezli-backend.onrender.com/houses/add",formDt)
   
        }
        catch (e) {
            console.log(e)
        }
    }


    return (<form onSubmit={handleAddBangalo}>
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
            <TextField fullWidth label="name" id="name" onChange={handleChange}  name="name" />
            <TextField fullWidth label="phone" id="phone" type="number" onChange={handleChange} name="phone"  />
            <TextField fullWidth label="space" id="space" onChange={handleChange} name="space" />
            <TextField fullWidth label="description" id="description" onChange={handleChange} name="description" />
            <TextField fullWidth label="Price Per Night" id="pricePerNight"onChange={handleChange} name="pricePerNight"  />
            <TextField fullWidth label="id Tourist Resort" id="idTouristResort" onChange={handleChange} name="idTouristResort" value={resortId} />
            <FormGroup>
                <FormControlLabel label="Show"  control={<Switch style={{ color: '#e6d168' }} />}  />
            </FormGroup>
            <input
                fullWidth
                id="images"
                type="file"
                name="image"
                onChange={handleImage}
                multiple
            /><br />
            <Button variant="contained" disableElevation onClick={props.handleClose} type="submit">
                Add Resort
            </Button>

        </Box>
    </Popup>
    </div >
     </form>
    )
}
export default AddBangaloPop;