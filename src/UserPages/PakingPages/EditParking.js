import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { editParkingSpace, resetEditParkingState } from "../../Redux/slices/secondUserSlice";


const HistoryRap = styled.div`
  padding: 15px;
  width: 100%;

  font-family: "Roboto";
  .link-container {
    display: flex;
    justify-content: flex-start;
    overflow-x: auto;
  }

  .link {
    padding: 20px 20px;
    text-decoration: none;
    color: #667085;
    white-space: nowrap;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    border-bottom: 2px solid transparent; /* Default underline */
    transition: all 0.3s ease;
  }

  .link.active {
    font-weight: 600;
    font-size: 14px;
    border-bottom: 2px solid black; /* Black underline for the active link */
    color: #112240;
  }

  .link:hover {
    color: #555; /* Optional hover effect */
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
  .parking-dropdown-body input {
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
`;

const EditMyParkingParking = () => {
  const dispatch = useDispatch()
    const { editparkingloading, myparking, loading, success, error, data, editparkingsuccess } = useSelector((state) => state.otherUser);
  
  const [activeLink, setActiveLink] = useState("mypark");
  const [parkingShow, setParkingShow] = useState(false);
  const [images, setImages] = useState([]);
  const [dragging, setDragging] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    address: "",
    description: "",
    status: "",
    image: [],
  });

console.log(formData)
console.log(editParkingSpace);


const isValid =
  formData.name.trim() !== "" &&
  formData.amount.trim() !== "" &&
  formData.address.trim() !== "" &&
  formData.description.trim() !== "" ;
 
  

    

  const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
          dispatch(editParkingSpace(formData));
        }
      };


 const handleImageUpload = (event) => {
  const files = Array.from(event.target.files).filter(
    (file) => file.type === "image/jpeg" || file.type === "image/png"
  );

  // Save preview images
  const previewPromises = files.map((file) => {
    const reader = new FileReader();
    return new Promise((resolve) => {
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
  });

  Promise.all(previewPromises).then((loadedImages) => {
    setImages((prev) => [...prev, ...loadedImages]);

    // Store only file names in formData.image
    const fileNames = files.map((file) => file.name);
    setFormData((prev) => ({
      ...prev,
      image: [...prev.image, ...fileNames],
    }));
  });
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

    const files = Array.from(event.dataTransfer.files);
    const newImages = files
      .filter((file) => file.type === "image/jpeg" || file.type === "image/png")
      .map((file) => {
        const reader = new FileReader();
        return new Promise((resolve) => {
          reader.onload = () => resolve(reader.result);
          reader.readAsDataURL(file);
        });
      });

    Promise.all(newImages).then((loadedImages) =>
      setImages((prev) => [...prev, ...loadedImages])
    );
  };

  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleParkingShow = () => {
    setParkingShow(!parkingShow);
  };

  return (
    <HistoryRap>
     
      
        <div className="dropdown-container">
          <div className="parking-dropdown">
            <div className="parking-dropdown-head">
              <h4>Add Parking Space</h4>
              <Icon
                onClick={handleParkingShow}
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
                    <input
                      type="file"
                      accept="image/jpeg, image/png"
                      multiple
                      onChange={handleImageUpload}
                      style={{ display: "none" }}
                    />
                  </label>
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
                          src={image}
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
                    background: isValid ? "#56BF2A" : "#bdddb0"
                }}
                onClick={handleSubmit}>
                  {editparkingloading ? <ClipLoader color="white" size={35} /> :
                  "Continue"}
                </button>
            </div>
          </div>
        </div>
     
      {editparkingsuccess ? (
                    <div className="dropdown-container">
                      <div className="cupon-drop">
                        <p>Parking space successfully</p>
                        <p></p>
                        <div className="button-div">
                          <button onClick={() => dispatch(resetEditParkingState())} className="submit-btn">Continue</button>
                          
                        </div>
                      </div>
                    </div>
                  ): ""}
    </HistoryRap>
  );
};

export default EditMyParkingParking;
