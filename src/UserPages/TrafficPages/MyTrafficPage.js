import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { formatDistanceToNow } from 'date-fns';
import MapRoad from "../Map";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { Icon } from "@iconify/react/dist/iconify.js";
import { uploadImages } from "../../Redux/slices/uploadSlice";
import { createParkingSpace, createTrafficUpdate, fetchMyTrafficUpdates, resetTrafficState } from "../../Redux/slices/secondUserSlice";

const TraficRap = styled.div`
font-family: 'Roboto';
width: 100%;

.center-tra {
    display: flex;
flex-direction: column;

align-items: center;
}
h2 {
    margin: 50px;
    margin-bottom: 20px !important;
    color: #112240;
    font-size: 18px;
    font-weight: 600;
}
  h5 {
    color: #112240;
    font-size: 16px;
    font-weight: 600;
    border-bottom: 1px solid #1122401f;
    padding: 15px;
  }
  p {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
  }
  h6 {
    max-width: 266px;
    color: #112240;
    font-size: 15 px;
    font-weight: 400;
  }
  .live-feed p {
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 6px;
    max-width: 187px;
  }
  .live-feed span {
    font-size: 12px;
    color: #112240;
  }
  .inner-live-feed {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .all-traffic-info {
    display: flex;
    align-items: center;
    justify-content: space-between;

  }

  .all-traffic-info img {
    height: 100px;
    width: 200px;
    border-radius: 10px;
  }
  .all-traffic-info:hover {
    background: #f2f2f2;
  }
  .trafic-info {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .space-traffic {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 15px;
  }
  .house-live-feed {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 15px;
  }
  .update-btn {
    background: #112240;
    text-decoration: none;
    width: 55px;
    height: 22px;
    display: flex;
    color: #ffffff;
    font-size: 12px;
    border-radius: 16px;
    font-weight: 400;
    align-items: center;
    justify-content: center;
  }
  .update-div {
    background: #f2f4f7;
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 5px;
    border-radius: 16px;
  }
  .all-update-div {
    background: #ffffff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px;
  }
  
  .all-traffic-update-divs {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
 
  .traffic-news {
    width: 100%;
  }
  .live-feed {
    width: 30%;
  }
  .traffic-map {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  .all-traffic-information {
    background: #ffffff;
    margin: 30px;
    padding: 30px;
    border-radius: 15px;
  }
  .upper-new-traffic {
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
    height: 120px;
    border-radius: 10px;
    border: 1px solid #1122401f;
    padding: 15px;
  }
  .parking-dropdown-body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
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
  @media (max-width: 678px) {
.all-traffic-information, .update-div {
    flex-direction: column;

}
.traffic-news {
    border-right: 1px solid white !important;
    width: 100%;
  }
  .live-feed {
    width: 100%;
  }
  }
`;

const MyTraffic = () => {
       const navigate = useNavigate();
        const dispatch = useDispatch()
           const { trafficloading, trafficData, loading, success, error, data, trafficsuccess } = useSelector((state) => state.otherUser);
           const [dragging, setDragging] = useState(false);
           const { backgroundChange} = useSelector((state)=> state.app)
         
const [createShow, setCreateShow] = useState(false)
  const [images, setImages] = useState("");

 const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    banner: "",
  });
console.log(trafficData);

const traffics = trafficData?.data?.data

  const isValid =
  formData.title.trim() !== "" &&
  formData.category.trim() !== "" &&
  formData.description.trim() !== "" ;
const handleCreateShow = () => {
  setCreateShow(!createShow)
}

  useEffect(() => {
      dispatch(fetchMyTrafficUpdates());
    }, [dispatch]);


const handleImageUpload = async (files) => {
  const validFiles = files.filter(file => file.type === "image/jpeg" || file.type === "image/png");
  if (validFiles.length === 0) {
    console.warn("No valid image files uploaded");
    return;
  }

  const resultAction = await dispatch(uploadImages({ files: validFiles, folderName: 'traffic' }));

  if (uploadImages.fulfilled.match(resultAction)) {
    const urls = resultAction.payload;

    // Use the first image URL only
    const firstImage = urls[0];

    setFormData(prev => ({
      ...prev,
      banner: firstImage,  // Set only one image URL
    }));

    setImages(firstImage);  // Also store single URL, not array
  } else {
    console.error("Upload failed:", resultAction.payload);
  }
};


 const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
          dispatch(createTrafficUpdate(formData));
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

       const handleClick = (id) => {
    
        navigate(`/users/mytraffic/details/${id}`);
      };
  return (
    <TraficRap>
       <div className="upper-new-traffic">
        <h2  style={{ color: backgroundChange=== true ? "white" : "" }}>My Traffic Updates</h2>
        <button onClick={handleCreateShow}>Create Update</button>
        </div>
         <div className="all-traffic-information">
          <div className="traffic-news">
            <h5>Traffic News Created</h5>
            <div className="space-traffic">
          {traffics?.map((items) => (
  <div onClick={() => handleClick(items.id)} className="all-traffic-info" key={items.id}>
    <div className="trafic-info">
      <p>{formatDistanceToNow(new Date(items.updated_at), { addSuffix: true })}</p>
      <h6>{items?.title}</h6>
    </div>
    <img src={`https://backoffice.rua.com.ng/${items.banner}`} alt="" />
  </div>
))}
             
              
            </div>
          </div>
         
        </div>
   {createShow ? (
        <div className="dropdown-container">
          <div className="parking-dropdown">
            <div className="parking-dropdown-head">
              <h4>Add Traffic Update</h4>
              <Icon
                onClick={handleCreateShow}
                icon="humbleicons:times"
                width="24"
                height="24"
                style={{ color: "#66708580", cursor: "pointer" }}
              />
            </div>
            <div className="parking-dropdown-body">
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="Traffic Title"
              />
              <input
               value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              type="text" placeholder="Traffic Category" />
          
              <textarea
               value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                type="text"
                placeholder="Traffic Description"
              ></textarea>
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
                      <div
                        style={{
                          width: "153px",
                          height: "99px",
                          borderRadius: "8px",
                          overflow: "hidden",
                          border: "1px solid #ccc",
                        }}
                      >
                        <img
                          src={`https://backoffice.rua.com.ng/${images}`}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                  </div>
                )}
              </div>
               <button  
               className="submit-btn"
                style={{
                    background: isValid ? "#56BF2A" : "#bdddb0"
                }}
                onClick={handleSubmit}>
                  {trafficloading ? <ClipLoader color="white" size={35} /> :
                  "Continue"}
                </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
          {trafficsuccess ? (
              <div className="dropdown-container">
                <div className="cupon-drop">
                  <p>Traffic Update Created successfully</p>
                  <p>Thanks!</p>
                  <div className="button-div">
                    <button onClick={() => dispatch(resetTrafficState())} className="submit-btn">Continue</button>
                    
                  </div>
                </div>
              </div>
            ): ""}
    </TraficRap>
  );
};
export default MyTraffic;
