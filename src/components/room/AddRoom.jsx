import React, { useState } from 'react'

const AddRoom = () => {
    const[newRoom, setNewRoom] = useState({
        photo: null,
        roomType: "",
        roomPrice: ""
    });
    
    const[imagePreview, setImagePreview] = useState("");
    const[successMessage, setSuccessMessage] = useState("");
    const[errorMessage, setErrorMessage] = useState("");

    // const handle

  return (
    <div>AddRoom</div>
  )
}

export default AddRoom