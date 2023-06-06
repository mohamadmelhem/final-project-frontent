import Popup from "../layout/Popup";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import './AddResortPop.css'
import { useEffect, useState } from "react";
import axios from "axios";


const AddResortPop = (props) => {
    const [idUser, setIdUser] = useState("")

    useEffect(() => {
        const userId = localStorage.getItem("userId")
        if (userId) {
            setIdUser(userId)
        }
    }, [])
    const [addResort, setAddResort] = useState({
        name: "",
        rating: "",
        location: "",
        description: ""
    })


    const [images, setImages] = useState([])

    const handleChange = (e) => {
        const value = e.target.value
        setAddResort({ ...addResort, [e.target.name]: value })
    }

    // const handleImage = (e) => {
    //     e.preventDefault()
    //     let image = e.target.files[0]
    //     setImage(image)
    // }

    // const handleImage = (event) => {
    //     const fileList = event.target.files;
    //     const imageArray = [];

    //     for (let i = 0; i < fileList.length; i++) {
    //       const reader = new FileReader();
    //       const file = fileList[i];

    //       reader.onload = (e) => {
    //         const image = e.target.result;
    //         imageArray.push(image);
    //       };

    //       reader.readAsDataURL(file);
    //     }

    //     setImage(imageArray);
    //   };\

    const handleImage = (event) => {
        const fileList = event.target.files;
        const selectedImages = Array.from(fileList);
        setImages(selectedImages);
    };

    const handleAddResort = async (e) => {
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
            formData.append("name", addResort.name)
            formData.append("rating", addResort.rating)
            formData.append("location", addResort.location)
            formData.append("description", addResort.description)
            formData.append("idUser", idUser)

            const formDt = {
                images: imageArray,
                name: addResort.name,
                rating: addResort.rating,
                location: addResort.location,
                description: addResort.description,
                idUser: idUser

            }

            const res = await axios.post(
                "https://hjezli-backend.onrender.com/touristResort",
                formDt)
            console.log(res)
        }
        catch (e) {
            console.log(e)
        }
    }

    return (<form onSubmit={handleAddResort}>
        <div className="add-resortpop">

            <Popup close={props.handleClose}>
                <h2>Add Resort </h2>
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
                    
                        <TextField fullWidth label="name" id="name" name="name" onChange={handleChange} />
                        <TextField fullWidth label="rating" id="rating" name="rating" type="number" onChange={handleChange} inputProps={{ min: 1, max: 5, }} />
                        <TextField fullWidth label="location" id="location" onChange={handleChange} name="location" />
                        <TextField fullWidth label="description" id="description" onChange={handleChange} name="description" />
                        <TextField fullWidth label="idUser" id="idUser" onChange={handleChange} name="idUser" value={idUser} />
                        <FormGroup>
                            <FormControlLabel label="Show" control={<Switch style={{ color: '#e6d168' }} />} />
                        </FormGroup>
                        <input
                            fullWidth
                            id="images"
                            name="image"
                            onChange={handleImage}
                            type="file"
                            multiple
                        /><br />
                        <Button variant="contained" disableElevation type="submit">
                            Add Resort
                        </Button>
                   

                </Box>
            </Popup>
        </div >
        </form>
    )
}
export default AddResortPop;