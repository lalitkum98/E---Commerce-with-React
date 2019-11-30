import FormData from "form-data";
import axios from "axios/index";

export const uploadImage = ({image}) => {
	const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dgpq7iwfq/upload';
	var data = new FormData();
	data.append('file', image, image.name);
	data.append('upload_preset', 'gjjnzuqt')
	return(
	axios.post(
		CLOUDINARY_URL,
		data,
		{
			headers: {
				'accept': 'application/json',
				'Accept-Language': 'en-US,en;q=0.8',
				'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
			}
		}
	))
}

