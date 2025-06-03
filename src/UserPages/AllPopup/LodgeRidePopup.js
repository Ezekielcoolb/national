import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImageUpload from "./ImageUpload";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCreatedRide, setDropdownVisible } from "../../Redux/appSlice";
import { fetchManifestById, lodgeRide, resetLodgeState } from "../../Redux/slices/userSlice";
import { ClipLoader } from "react-spinners";
import { uploadImages } from "../../Redux/slices/uploadSlice";

const LodgeRidePopRap = styled.div`
  label {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 5px;
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

const LodgeRidePopup = () => {
  const { dropdowVisible,  createdRide } = useSelector((state) => state.app);
  const dispatch = useDispatch();
const [rideCuponShow, setRideCuponShow] = useState(false)
  const { manifestDatabyId, manifestByloading, logRideloading, logRidesuccess, loading, error } = useSelector((state) => state.users);
const [rideId, setRideId] =useState("")
console.log(manifestDatabyId);

const manifestData = manifestDatabyId?.data
 const [imagePreviews, setImagePreviews] = useState([]); // multiple preview URLs
  const [imageFiles, setImageFiles] = useState([]); 

  console.log(imagePreviews);
  

console.log(manifestData);

const [formData, setFormData] = useState({
  manifest_id: "",
  address: "",
  destination_address: "",
  next_of_kin_full_name: "",
   next_of_kin_phone: "",
    next_of_kin_address: "",
  vehicle_number: "",
  driver_name: "",
  vehicle_name: "",
  park_name: "",
  departure_state: "",
  vehicle_model: "",
  destination_state: "",
  next_of_kin_photo: "",
  vehicle_images: [],
});
console.log(formData);

const isValid =
  formData.address.trim() !== "" &&
  formData.destination_address.trim() !== "" &&
  formData.next_of_kin_full_name.trim() !== "" &&
  formData.next_of_kin_phone.trim() !== "" &&
  formData.next_of_kin_address.trim() !== "" &&
  formData.vehicle_number.trim() !== "" &&
  formData.driver_name.trim() !== "" &&
  formData.vehicle_name.trim() !== "" &&
  formData.park_name.trim() !== "" &&
  formData.vehicle_model.trim() !== "" &&
  formData.departure_state.trim() !== "" &&
  formData.destination_state.trim() !== "";
  

useEffect(() => {
  if (manifestData?.images) {
    setImagePreviews(JSON.parse(manifestData?.images));
  } else {
    setImagePreviews([]);
  }
}, [manifestData?.images]);


useEffect(() => {
  if (manifestData) {
    // Check if all formData fields are empty or empty array
    const isFormEmpty =
      formData.manifest_id === "" &&
      formData.address === "" &&
      formData.destination_address === "" &&
      formData.next_of_kin_full_name === "" &&
      formData.next_of_kin_phone === "" &&
      formData.next_of_kin_address === "" &&
      formData.vehicle_number === "" &&
      formData.driver_name === "" &&
      formData.vehicle_name === "" &&
      formData.park_name === "" &&
      formData.departure_state === "" &&
      formData.vehicle_model === "" &&
      formData.destination_state === "" &&
      formData.next_of_kin_photo === "" &&
      formData.vehicle_images.length === 0;  // check empty array correctly

    if (isFormEmpty) {
      setFormData({
        manifest_id: manifestData?.manifest_num || "",
        address: "", // no data from manifest, keep empty
        destination_address: "",
        next_of_kin_full_name: "",
        next_of_kin_phone: "",
        next_of_kin_address: "",
        next_of_kin_photo: "",
        vehicle_number: manifestData?.vehicle_number || "",
        driver_name: manifestData?.driver_name || "",
        vehicle_name: manifestData?.vehicle_name || "",
        park_name: manifestData?.park_name || "",
        departure_state: manifestData?.departure_state || "",
        vehicle_model: manifestData?.vehicle_model || "",
        destination_state: manifestData?.destination_state || "",
        vehicle_images: JSON.parse(manifestData?.images || "[]"),
      });
    }
  }
}, [manifestData]);

const handleImageUpload = async (files) => {
  const resultAction = await dispatch(uploadImages({ files, folderName: 'vehicles' }));

  if (uploadImages.fulfilled.match(resultAction)) {
    const urls = resultAction.payload;

    // Add image URLs to formData
    setFormData(prev => ({
      ...prev,
      vehicle_images: [...prev.vehicle_images, ...urls],
    }));

    // Add image URLs to previews
    setImagePreviews(prev => [...prev, ...urls]);
  } else {
    console.error("Upload failed:", resultAction.payload);
  }
};

const handleSubmitRideId = (e) => {
      e.preventDefault();
      if (rideId) {
         dispatch(fetchManifestById(rideId));
         setRideCuponShow(false)
      }
    };


    const handleSubmit = (e) => {
          e.preventDefault();
          if (isValid) {
            dispatch(lodgeRide(formData));
          }
        };

const handleCuponShow = () => {
  setRideCuponShow(!rideCuponShow)
}
  const handleVisisble = () => {
    dispatch(setDropdownVisible());
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
            <h4>Lodge Ride</h4> 
            <Link onClick={handleCuponShow} className="click-lodge">Click to lodge a ride</Link>
          </div>
          <div className="dropdown-div ">
            <div className="left-dropdown-div">
              <h5>Vehicle information</h5>
              <div className="left-inner-div">
                <div className="input-divs">
                  {/* <label>
                    Ride ID <br />
                    <input 
                      type="text" 
                      value={formData.manifest_id} 
                      onChange={(e) => setFormData({ ...formData, manifest_id: e.target.value })}
                    />
                  </label> */}
                  <label>
                    Vehicle Number <br />
                    <input 
                      type="text" 
                      placeholder="Enter vehicle number"
                      value={formData.vehicle_number} 
                      onChange={(e) => setFormData({ ...formData, vehicle_number: e.target.value })}
                    />
                  </label>
                </div>
                <div className="input-divs">
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
                  <label>
                    Park Name <br />
                    <input 
                      type="text" 
                      placeholder="Enter park name"
                      value={formData.park_name}
                      onChange={(e) => setFormData({ ...formData, park_name: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, vehicle_name: e.target.value })}
                    />
                  </label>
                </div>
                                <div className="input-divs">
                  <label>
                    Departure State <br />
                    <input
                      type="text"
                      placeholder="Enter departure state"
                      value={formData.departure_state}
                      onChange={(e) =>
                        setFormData({ ...formData, departure_state: e.target.value })
                      }
                    />             
                  </label>
                  <label>
                    Destination State <br />
                    <input 
                      type="text" 
                      placeholder="Enter destination state"
                      value={formData.destination_state}
                      onChange={(e) => setFormData({ ...formData, destination_state: e.target.value })}
                    />
                  </label>
                </div>
                <div className="input-divs">
                  <label>
                    Address <br />
                    <input
                      style={{  borderRadius: "12px" }}
                      type="text"
                      placeholder="Enter your current address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                  </label>
                  <label>
                    Destination Address <br />
                    <input
                      style={{ borderRadius: "12px" }}
                      type="text"
                      placeholder="Enter your destination address"
                      value={formData.destination_address}
                      onChange={(e) => setFormData({ ...formData, destination_address: e.target.value })}
                    />
                  </label>
                </div>
              </div>
              <h5>Next of KIN information</h5>
              <div className="left-inner-div">
                <div className="input-divs">
                  <label>
                    Full Name
                    <br />
                    <input 
                      type="text" 
                      placeholder="Enter name"
                      value={formData.next_of_kin_full_name}
                      onChange={(e) => setFormData({ ...formData, next_of_kin_full_name: e.target.value })}
                    />
                  </label>
                  <label>
                    Phone Number <br />
                    <input 
                      type="text" 
                      placeholder="Enter phone number"
                      value={formData.next_of_kin_phone}
                      onChange={(e) => setFormData({ ...formData, next_of_kin_phone: e.target.value })}
                    />
                  </label>
                </div>
                <div className="input-divs">
                  <label>
                    Address <br />
                    <input
                      style={{ borderRadius: "12px" }}
                      type="text"
                      placeholder="Enter your current address"
                      value={formData.next_of_kin_address}
                      onChange={(e) => setFormData({ ...formData, next_of_kin_address: e.target.value })}
                    />
                  </label>
                 
                </div>
              </div>
            </div>
            <div className="right-dropdown-div">
              <h5>Images</h5>

              <div className="right-inner-div">
                <div className="inner-right-div">
                  <label>Upload vehicle image (optional)</label>
                  <ImageUpload onUpload={handleImageUpload} />
                </div>

                {imagePreviews?.length > 0 && (
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
              <div className="all-link">
                <Link onClick={handleVisisble} className="Cancel">
                  Cancel
                </Link>
                <button  
                style={{
                    background: isValid ? "#56BF2A" : "#bdddb0"
                }}
                onClick={handleSubmit} className="Create">
                  {logRideloading ? <ClipLoader color="white" size={35} /> :
                  "Lodge Ride"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {rideCuponShow ? (
        <div className="dropdown-container">
          <div className="cupon-drop">
            <input 
              value={rideId}
              onChange={(e) => setRideId(e.target.value)}
              type="text" 
              placeholder="Enter ride id" 
            />
            <div className="button-div">
              <button onClick={handleSubmitRideId} className="submit-btn">Continue</button>
              <button onClick={handleCuponShow} className="cancel-btn">Cancel</button>
            </div>
          </div>
        </div>
      ) : null}

      {manifestByloading ? (
        <div className="dropdown-container">
          <ClipLoader color="white" size={100} />
        </div>
      ) : null}

        {logRidesuccess ? (
              <div className="dropdown-container">
                <div className="cupon-drop">
                  <p>Ride lodged successfully</p>
                  <p>Enjoy your journey!</p>
                  <div className="button-div">
                    <button onClick={() => dispatch(resetLodgeState())} className="submit-btn">Continue</button>
                    
                  </div>
                </div>
              </div>
            ): ""}
    </LodgeRidePopRap>
  );
};
export default LodgeRidePopup;
