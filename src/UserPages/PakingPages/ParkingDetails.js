import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { editParkingSpace, fetchMyParkinSpaceDetails, resetEditParkingState } from "../../Redux/slices/secondUserSlice";
import EditMyParkingParking from "./EditParking";
import { ClipLoader } from "react-spinners";
import { uploadImages } from "../../Redux/slices/uploadSlice";

const TrafficDetaiRap = styled.div`
  width: 100%;
  font-family: "Roboto";

  padding: 30px;
  p {
    font-size: 15px;
    font-weight: 400;
    color: #667085;
  }
  h2 {
    color: #112240 !important;
    max-width: 383px;
    font-size: 24px;
    font-weight: 700;
  }
  .icon-header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
  }
  .back-arrow-left {
    width: 30px;
    height: 30px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #11224014;
  }
  .icon-header h2 {
    color: #112240;
    font-size: 18px;
    font-weight: 600;
  }
  .tech-div p {
    font-size: 12px;
  }
  .tech-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .tech {
    background: #c7edcc;
    width: 72px;
    height: 24px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:  #359742;
    font-size: 10px;
    font-weight: 400;
  }
  .lasma p {
    font-size: 12pv;
  }
  .lasma {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .all-details-divs p {
    max-width: 535px;
  }
  .all-details-divs {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .traffic-detalis-all-divs {
    border: 1px solid #1122401f;
    border-radius: 16px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
  }
   .rating-star {
    display: flex;
    align-items: center;
    flex-direction: row !important;
    gap: 5px;
   }
    .parking-images img {
        width: 150px;
        border-radius: 10px;
        height: 100px;
    }
   .parking-images {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
   }
   .book-now {
     width: 120px;
    height: 40px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid blue;
    text-decoration: none;
    color: blue;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    background: transparent;
   }
    .create-parking {
    width: 150px;
    height: 40px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid blue;
    text-decoration: none;
    color: white;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    background: blue;
  }
  .upper-parking {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .parking-dropdown {
    background: #ffffff;
    border-radius: 12px;
  }
  .parking-dropdown-head h4 {
    color: #112240 !important;
    max-width: 383px;
    font-size: 18px;
    font-weight: 600;
  }
  .parking-dropdown-head {
    display: flex;
    padding: 20px;
    border: 1px solid #1122401f;
    justify-content: space-between;
  }
  .parking-dropdown-body input, .parking-dropdown-body select {
    width: 380px;
    height: 45px;
    border-radius: 100px;
    padding-left: 15px;
    border: 1px solid #1122401f;
  }
  .parking-dropdown-body textarea {
    width: 380px;
    height: 70px;
    border-radius: 10px;
    border: 1px solid #1122401f;
    padding: 15px;
  }
  .parking-dropdown-body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .submit-btn {
    width: 380px;
    height: 45px;
    color: white;
    background: blue;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    border: none;
  }
  .all-details-divs-img {
    width: 600px;
    height: 300px;
  }
`;

const ParkingDetials = () => {
 const [images, setImages] = useState([]);
  const [dragging, setDragging] = useState(false);
  const { id } = useParams();
    const dispatch = useDispatch();
    const { loading, error, myParkDetails, editparkingloading, editparkingsuccess  } =
      useSelector((state) => state.otherUser);

      const [editParkingShow, setEditParkingShow] = useState(false)


      const details = myParkDetails?.data
console.log(details);


let imagesArray = [];

if (details?.image) {
  try {
    imagesArray = JSON.parse(details.image);
  } catch (err) {
    console.error("Invalid JSON in vehicle_images:", err);
  }
}

 const [formData, setFormData] = useState({
  id: id,
    name: details?.name,
    amount: details?.amount,
    address: details?.address,
    description: details?.description,
    status: details?.status,
    image: [],
  });

useEffect(() => {
  if (details?.image) {
    setImages(JSON.parse(details?.image));
  } else {
    setImages([]);
  }
}, [details?.image]);

useEffect(() => {
  if (details) {
    setFormData({
      id: details.id,
      name: details?.name || "",
      amount: details?.amount || "",
      address: details?.address || "",
      description: details?.description || "",
      status: details?.status || "",
      image: JSON.parse(details?.image || "[]"),
    });
  }
}, [details]);


const handleImageUpload = async (files) => {
  const validFiles = files.filter(file => file.type === "image/jpeg" || file.type === "image/png");
  if (validFiles.length === 0) {
    console.warn("No valid image files uploaded");
    return;
  }

  const resultAction = await dispatch(uploadImages({ files: validFiles, folderName: 'vehicles' }));

  if (uploadImages.fulfilled.match(resultAction)) {
    const urls = resultAction.payload;

    // Add image URLs to formData and preview
    setFormData(prev => ({
      ...prev,
      image: [...prev.image, ...urls],
    }));
    setImages(prev => [...prev, ...urls]);
  } else {
    console.error("Upload failed:", resultAction.payload);
  }
};


  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

   const handleDrop = (event) => {
  event.preventDefault();
  setDragging(false);

  const files = Array.from(event.dataTransfer.files).filter(
    (file) => file.type === "image/jpeg" || file.type === "image/png"
  );

  if (files.length > 0) {
    handleImageUpload(files);  // upload the images
  }
};

const handleEditParkingShow = () => {
  setEditParkingShow(!editParkingShow)
}
        useEffect(() => {
          if(id) {
          dispatch(fetchMyParkinSpaceDetails(id));
          }
        }, [dispatch, id]);
        
  const getStatusColor = (status) => {
    if (status === "pending") return "#359742";
    if (status === "accepted") return "green";
     if (status === "available") return "green";
    if (status === "cancelled") return "red";
    if (status === "declined") return "red";
       if (status === "closed") return "red";
    if (status === "completed") return "green";
    return "#112240"; // Default color if priority is missing or unrecognized
  };


  const handleSubmit = (e) => {
          e.preventDefault();
            dispatch(editParkingSpace(formData));
        };
      
  return (
    <TrafficDetaiRap>
      <div className="icon-header">
        <Link to="/users/parking">
          <Icon
            className="back-arrow-left"
            icon="material-symbols-light:arrow-left-alt"
            width="13"
            height="13"
            style={{ color: "#112240" }}
          />
        </Link>
        <h2>Parking Details</h2>
      </div>
      <div className="traffic-detalis-all-divs">
        <div className="all-details-divs">
          {imagesArray.length > 0 && (
  <img className="all-details-divs-img" src={`https://backoffice.rua.com.ng/${imagesArray[0]}`} alt="First" />
)}
          <div className="tech-div">
            {/* <p className="tech">Pending</p> */}
            <div className="rating-star">
             <span style={{ color: getStatusColor(details?.status) }}>
              {details?.status}
            </span>
            
            </div>
          </div>
          <h2>{details?.name}</h2>
          <div className="lasma">
            <img src="/images/traffic_person.png" alt="" />
            <p>Owner: Lionel Messi</p>
          </div>
          <div className="lasma">
            <Icon
              icon="mingcute:location-line"
              width="20"
              height="20"
              style={{ color: "#66708580" }}
            />{" "}
            <p>{details?.address}s</p>
          </div>
          <p>
           {details?.description}
          </p>
          <div className="parking-images">
            {imagesArray?.map((image)=> (
            <img src={`https://backoffice.rua.com.ng/${image}`} alt="" />

            ))}
          </div>
          <button onClick={handleEditParkingShow} className="book-now">Edit</button>
        </div>
      </div>

      {editParkingShow ? (
        <div className="dropdown-container">
          <div className="parking-dropdown">
            <div className="parking-dropdown-head">
              <h4>Edit Parking Space</h4>
              <Icon
                onClick={handleEditParkingShow}
                icon="humbleicons:times"
                width="24"
                height="24"
                style={{ color: "#66708580", cursor: "pointer" }}
              />
            </div>
            <div className="parking-dropdown-body">
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Parking Name"
              />
              <input
               value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              type="text" placeholder="Parking Address" />
              <input
               value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
              type="text" placeholder="Parking price" />
              <textarea
               value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                type="text"
                placeholder="Parking Description"
              ></textarea>

                 <select
                          value={formData.status}
                          onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
                        >
                          <option value="">Select status</option>
                          <option value="available">Available</option>
                          <option value="closed">Closed</option>
                        </select>
              <div>
                {/* Upload Area */}
                <div
                  style={{
                    border: " 1px solid #1122401F",
                    borderRadius: "10px",
                    padding: "20px",
                    display: "flex",
                    width: "380px",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: dragging ? "#ffffff" : "#ffffff",
                    cursor: "pointer",
                  }}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                                  <label
  htmlFor="imageUpload"
  style={{
    display: "block",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: "400",
    color: "#667085",
  }}
>
  <p
    style={{
      background: "#F2F4F7",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <img src="/images/upload_icon.png" alt="" />
  </p>
  <p>
    <span
      style={{
        color: "#56BF2A",
        fontWeight: "500",
      }}
    >
      Click to upload
    </span>{" "}
    or drag and drop
  </p>
  <p>JPG or PNG file format only</p>
</label>
<input
  id="imageUpload"
  type="file"
  accept="image/jpeg, image/png"
  multiple
  onChange={(e) => handleImageUpload(Array.from(e.target.files))}
  style={{ display: "none" }}
/>
                </div>

                {/* Display Uploaded Images */}
                {images.length > 0 && (
                  <div
                    style={{
                      marginTop: "20px",
                      display: "flex",
                      flexWrap: "wrap",
                      width: "320px",
                      gap: "6px",
                      justifyContent: "center",
                    }}
                  >
                    {images.map((image, index) => (
                      <div
                        key={index}
                        style={{
                          width: "153px",
                          height: "99px",
                          borderRadius: "8px",
                          overflow: "hidden",
                          border: "1px solid #ccc",
                        }}
                      >
                        <img
                          src={`https://backoffice.rua.com.ng/${image}`}
                          alt={`Uploaded ${index + 1}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
               <button  
               className="submit-btn"
                style={{
                    background:  "#56BF2A"
                }}
                onClick={handleSubmit}>
                  {editparkingloading ? <ClipLoader color="white" size={35} /> :
                  "Continue"}
                </button>
            </div>
          </div>
        </div>
      ): ""}
      {editparkingsuccess ? (
                          <div className="dropdown-container">
                            <div className="cupon-drop">
                              <p>Parking space information 
                                <br /> updated successfully</p>
                              <p></p>
                              <div className="button-div">
                                <button onClick={() => dispatch(resetEditParkingState())} className="submit-btn">Continue</button>
                                
                              </div>
                            </div>
                          </div>
                        ): ""}
    </TrafficDetaiRap>
  );
};

export default ParkingDetials;
