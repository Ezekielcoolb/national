import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchComplainDetails } from "../Redux/slices/secondUserSlice";

const ComplainRap = styled.div`
width: 100%;
padding: 30px;
@media (max-width: 678px) {
    padding: 2px !important;
}
  h4 {
    font-weight: 600;
    font-size: 16px;
    color: #112240;
  }
  h4 {
    font-weight: 500;
    font-size: 14px;
    color: #112240;
  }
  p {
    color: #667085;
    font-weight: 400;
    font-size: 14px;
  }
  .ride-detail-header {
    display: flex;
    justify-content: space-between;
    padding: 20px 0px;
  }
  .icon-header {
    display: flex;
    align-items: center;
    gap: 20px;
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
  .send-message {
    border-radius: 100px;
    width: 126px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #56bf2a;
    color: #56bf2a;
    font-size: 12px;
    font-weight: 500;
  }
  .all-rides-details {
    border: 1px solid #1122401f;
    border-radius: 16px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
  }
  .p-text {
    font-size: 12px;
  }
  .p-color {
    color: #112240;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .environ {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .complain-1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #1122401f;
    padding-bottom: 15px;
  }
  .ride-info {
    
    padding: 15px 0px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .ride-info p {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .ride-info span {
    color: #112240;
  }
  .complain-2 h3 {
    border-bottom: 1px solid #1122401f;
    padding-bottom: 15px;
  }
  .complain-2 {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .right-header {
    border-bottom: 1px solid #1122401f;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .images-car {
    display: flex;
    gap: 10px;
    padding: 15px;
  }
  .offical-images {
    display: flex;
  }
  .offical-images  img {
    margin-right: -5px;
  }
  .all-complain {
    border: 1px solid #1122401F;
    max-width: 510px;
    padding: 20px;
    border-radius: 16px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .complain-2 h5, .right-head h5 {
    border-bottom: 1px solid #1122401F;
    padding-bottom: 15px;
  }
  .edit-complain-btn , .emergency-complain-btn{
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 154px;
    height: 40px;
    color: #56BF2A;

    border-radius: 100px;
    border: 1px solid #56BF2A;
    
    font-size: 14px;
    font-weight: 500;
  }
  .emergency-complain-btn {
    width: 187px;
 
    background: #56BF2A;
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
  }
  .complain-btn {
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
  @media (max-width: 500px) {
    .all-complain {
    
    max-width: 350px !important;
    }
    .complain-btn  {
flex-direction: column;
    }
} 
`;

const UserComplaintsDetails = () => {

    const {id} = useParams()
    const dispatch = useDispatch()
        const { complainDetails, loading, success, error } = useSelector((state) => state.otherUser);
  const { backgroundChange} = useSelector((state)=> state.app)

console.log(complainDetails);


    
      useEffect(() => {
        if(id) {
          dispatch(fetchComplainDetails(id));
        }
        }, [dispatch, id]);


        const formattedDate = new Date(complainDetails?.data?.created_at).toLocaleString('en-US', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
});
  return (
    <ComplainRap>
      <div className="ride-detail-header">
        <div className="icon-header">
          <Link to="/users/complain">
            <Icon
              className="back-arrow-left"
              icon="material-symbols-light:arrow-left-alt"
              width="13"
              height="13"
             style={{ color: backgroundChange=== true ? "white" : "#112240" }}
            />
          </Link>
          <h2 
           style={{ color: backgroundChange=== true ? "white" : "" }}
          >Complain Details</h2>
        </div>
       
      </div>
      <div className="all-rides-details">
        <div className="all-complain">
          <div className="complain-1">
            <div className="environ">
              <h4>Pregnancy Complications</h4>
              <p className="p-text">{formattedDate}</p>
              <p className="p-color">
                <img src="/images/location_icon.png" alt="" />
                {complainDetails?.data?.city} {complainDetails?.data?.state}</p>
            </div>
            <img src="/images/baby.png" alt="" />
          </div>
          <div className="ride-info">
            <p>
              Complain ID
              <span>{complainDetails?.data?.id}</span>
            </p>
            <p>
              Role
              <span>{complainDetails?.data?.role}</span>
            </p>
            <p>
              Name
              <span>{complainDetails?.data?.name}</span>
            </p>
            <p>
              Tagged Officals
              <span className="offical-images">
              <img src="/images/esevr.png" alt="" />
              <img src="/images/firs.png" alt="" />
             
              </span>
            </p>
          </div>

          <div className="complain-2">
            <h5>Description</h5>
            <p style={{maxWidth: "367px"}}>
           {complainDetails?.data?.description}
            </p>
          </div>
          <div>
              
            </div>
           
        </div>
      </div>
    </ComplainRap>
  );
};

export default UserComplaintsDetails;
