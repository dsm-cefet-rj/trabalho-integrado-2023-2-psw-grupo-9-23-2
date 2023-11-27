import { useEffect, useState } from "react";
import axios from "axios";
import '/bootstrap-5.3.1-dist/css/bootstrap.css'

export default function uploadImage() {
  const [image, setImage] = useState(null);
    
  
  const submitImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    const result = await axios.post(
      "http://localhost:8000/upload-image",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    window.location.reload();
  };

  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <h3>Realizar upload de imagem</h3>
      <form onSubmit={submitImage}>
        <input type="file" accept="image/*" onChange={onInputChange}></input>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}