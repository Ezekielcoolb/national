import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatDistanceToNow } from 'date-fns';

import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchMyTrafficDetails } from "../../Redux/slices/secondUserSlice";

const TrafficDetaiRap = styled.div`
width: 100%;
font-family: 'Roboto';

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
.tech-div p{
    font-size: 12px;
}
.tech-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.tech {
    background: #11224014;
    width: 72px;
    height: 24px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #667085;
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
    border: 1px solid #1122401F;
    border-radius: 16px;
    background: #ffffff;
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
padding: 20px;
}
`

const MyTrafficDetials = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const { trafficDetailsMy, loading, success, error } = useSelector((state) => state.otherUser);
      console.log(trafficDetailsMy);
        const { backgroundChange} = useSelector((state)=> state.app)
      
      const details = trafficDetailsMy?.data
    
    useEffect(() => {
        if(id) {
          dispatch(fetchMyTrafficDetails(id));
        }
        }, [dispatch, id]);


    return (
        <TrafficDetaiRap>
            <div className="icon-header">
                     <Link to="/users/mytraffic">
                       <Icon
                         className="back-arrow-left"
                         icon="material-symbols-light:arrow-left-alt"
                         width="13"
                         height="13"
                          style={{ color: backgroundChange=== true ? "white" : "#112240" }}
                       />
                     </Link>
                     <h2  style={{ color: backgroundChange=== true ? "white" : "" }}>Traffic Details</h2>
                   </div>
            <div className="traffic-detalis-all-divs">
            <div className="all-details-divs">
                <img src="/images/img_traffic.png" alt="" />
                <div className="tech-div">
                    <p className="tech">{details?.category}</p>
<p>
  {details?.updated_at
    ? `${formatDistanceToNow(new Date(details.updated_at), { addSuffix: true })} • ${details?.views} views`
    : ""}
</p>                </div>
                <h2>{details?.title}</h2>
                <div className="lasma">
                    <img src="/images/traffic_person.png" alt="" />
                    <p>By: {details?.user?.last_name} {details?.user?.first_name}</p>
                    <img src="/images/traffic_icon.png" alt="" />
                </div>
                <p>{details?.description}</p>


            </div>
            </div>
        </TrafficDetaiRap>
    )
}

export default MyTrafficDetials