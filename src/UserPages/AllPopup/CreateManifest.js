import React, { useState } from "react";
import styled from "styled-components";
import ImageUpload from "./ImageUpload";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCreatedManifest, setCreatedRide, setDropdownVisible } from "../../Redux/appSlice";
import { createManifest, resetManifestState } from "../../Redux/slices/userSlice";
import { uploadImages } from "../../Redux/slices/uploadSlice";

const LodgeRidePopRap = styled.div`
  label {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  h5 {
    color: #112240;
    font-size: 14px;
    font-weight: 500;
  }
  h4 {
    color: #112240;
    font-size: 16px;
    font-weight: 600;
  }
  input {
    width: 254px;
    height: 40px;
    border-radius: 100px;
    border: 1px solid #1122401f;
    padding: 10px;
  }
  .checkbox {
    width: 16px !important;
    height: 16px !important;
    border-radius: 1px !important;
  }
  .click-lodge {
    color: blue;

  }
  .dropdown-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .cupon-drop {
    background: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }
  .cupon-drop input {
 width: 380px;
    height: 45px;
    border-radius: 100px;
    padding-left: 15px;
    border: 1px solid #1122401f;
  }
    .submit-btn, .cancel-btn {
    width: 160px;
    height: 45px;
    color: white;
    background: blue;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    border: none;
  }
  .cancel-btn {
    background: red;
  }
  .button-div {
    display: flex;
    gap: 20px;
  }
`;

const CreateManifestPopup = () => {
  const { dropdowVisible,  createdRide } = useSelector((state) => state.app);
    const { urls } = useSelector(state => state.upload);
    console.log(urls);
    
  const dispatch = useDispatch();
const [rideCuponShow, setRideCuponShow] = useState(false)
  const { loading, success, error, data, manifestsuccess } = useSelector((state) => state.users);
  const [imagePreviews, setImagePreviews] = useState([]); // multiple preview URLs
  const [imageFiles, setImageFiles] = useState([]);       // actual image filesconst { loading, success, error, data } = useSelector((state) => state.users);
console.log(data);

console.log(imagePreviews);


const [formData, setFormData] = useState({
  vehicle_number: "",
  driver_name: "",
  vehicle_name: "",
  park_name: "",
  departure_state: "",
  vehicle_model: "",
  destination_state: "",
  images: [],
});


const isValid =
  formData.vehicle_number.trim() !== "" &&
  formData.driver_name.trim() !== "" &&
  formData.vehicle_name.trim() !== "" &&
  formData.park_name.trim() !== "" &&
  formData.vehicle_model.trim() !== "" &&
  formData.departure_state.trim() !== "" &&
  formData.destination_state.trim() !== "";


           
console.log(formData);
console.log(isValid);


const handleSubmit = (e) => {
      e.preventDefault();
      if (isValid) {
        dispatch(createManifest(formData));
      }
    };


const handleImageUpload = async (files) => {
  const resultAction = await dispatch(uploadImages({ files, folderName: 'vehicles' }));

  if (uploadImages.fulfilled.match(resultAction)) {
    const urls = resultAction.payload;

    // Add image URLs to formData
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...urls],
    }));

    // Add image URLs to previews
    setImagePreviews(prev => [...prev, ...urls]);
  } else {
    console.error("Upload failed:", resultAction.payload);
  }
};


  
const handleCuponShow = () => {
  setRideCuponShow(!rideCuponShow)
}
  const handleVisisble = () => {
    dispatch(setCreatedManifest());
  };

  const handleCreateRide = () => {
    dispatch(setDropdownVisible());
    dispatch(setCreatedRide());
  };

 
  return (
   <LodgeRidePopRap>
      <div className="dropdown-container">
        <div className="all-dropdown-div ">
          <div className="dropdown-header">
            <h4>Create a manifest</h4>
           
          </div>
          <div className="dropdown-div ">
            <div className="left-dropdown-div">
              <h5>Vehicle information</h5>
              <div className="left-inner-div">
                <div className="input-divs">
                  <label>
                    Vehicle Number <br />
                    <input
                      type="number"
                      placeholder="Enter vehicle number"
                      value={formData.vehicle_number}
                      onChange={(e) =>
                        setFormData({ ...formData, vehicle_number: e.target.value })
                      }
                    />
                  </label>
                </div>
                <div className="input-divs">
                  <label>
                    Driver Name <br />
                    <input
                      type="text"
                      placeholder="Enter driver name"
                      value={formData.driver_name}
                      onChange={(e) =>
                        setFormData({ ...formData, driver_name: e.target.value })
                      }
                    />
                  </label>
                  <label>
                    Vehicle Name <br />
                    <input
                      type="text"
                      placeholder="Enter vehicle name"
                      value={formData.vehicle_name}
                      onChange={(e) =>
                        setFormData({ ...formData, vehicle_name: e.target.value })
                      }
                    />
                  </label>
                </div>
                <div className="input-divs">
                  <label>
                    Park Name <br />
                    <input
                      type="text"
                      placeholder="Enter park name"
                      value={formData.park_name}
                      onChange={(e) =>
                        setFormData({ ...formData, park_name: e.target.value })
                      }
                    />
                  </label>
                  <label>
                    Vehicle Model <br />
                    <input
                      type="text"
                      placeholder="Enter vehicle model"
                      value={formData.vehicle_model}
                      onChange={(e) =>
                        setFormData({ ...formData, vehicle_model: e.target.value })
                      }
                    />
                  </label>
                </div>
                <div className="input-divs">
                  <label>
                    Departure State <br />
                    <input
                      style={{ borderRadius: "12px" }}
                      type="text"
                      placeholder="Enter your current state"
                      value={formData.departure_state}
                      onChange={(e) =>
                        setFormData({ ...formData, departure_state: e.target.value })
                      }
                    />
                  </label>
                  <label>
                    Destination State <br />
                    <input
                      style={{ borderRadius: "12px" }}
                      type="text"
                      placeholder="Enter your destination state"
                      value={formData.destination_state}
                      onChange={(e) =>
                        setFormData({ ...formData, destination_state: e.target.value })
                      }
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="right-dropdown-div">
              <h5>Images</h5>
               <div className="right-inner-div">
                <div className="inner-right-div">
                  <label>Upload vehicle images (optional)</label>
                  <ImageUpload onUpload={handleImageUpload} />

                  {/* Show previews for all uploaded images */}
                  {imagePreviews.length > 0 && (
                    <div style={{ marginTop: '10px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      {imagePreviews.map((src, idx) => (
                        <img
                          key={idx}
                          src={`https://backoffice.rua.com.ng/${src}`}
                          alt={`Vehicle Preview ${idx + 1}`}
                          style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '8px',
                            objectFit: 'cover',
                            border: '1px solid #ccc',
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="all-link">
                <Link onClick={handleVisisble} className="Cancel">
                  Cancel
                </Link>
                <button style={{
                    background: isValid ? "#56BF2A" : "#bdddb0"
                }} onClick={handleSubmit} className="Create">
                  Create Ride
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {manifestsuccess ? (
        <div className="dropdown-container">
          <div className="cupon-drop">
            <p>Manifest Created successfully</p>
            <p>The manifest id is {data?.data?.manifest_num}</p>
            <div className="button-div">
              <button onClick={() => dispatch(resetManifestState())} className="submit-btn">Continue</button>
              
            </div>
          </div>
        </div>
      ): ""}
    </LodgeRidePopRap>
  );
};
export default CreateManifestPopup;
