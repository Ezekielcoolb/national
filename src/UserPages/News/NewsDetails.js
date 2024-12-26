import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

.safety {
    background: #f2fbee;
    padding: 5px 10px 5px 10px;
    border-radius: 16px;
    color: #56bf2a;
    font-size: 12px;
    font-weight: 500;
    width: 85px;
  }
`

const NewsDetails = () => {
    return (
        <TrafficDetaiRap>
            <div className="icon-header">
                     <Link to="/users/news">
                       <Icon
                         className="back-arrow-left"
                         icon="material-symbols-light:arrow-left-alt"
                         width="13"
                         height="13"
                         style={{ color: "#112240" }}
                       />
                     </Link>
                     <h2>News Details</h2>
                   </div>
            <div className="traffic-detalis-all-divs">
            <div className="all-details-divs">
                <img src="/images/news_detail_img.png" alt="" />
                <div className="tech-div">
                    <p className="safety">Road Safety</p>
                    <p>Jan 1, 2021 . 3344 views</p>
                </div>
                <h2>How collaboration makes us better designers</h2>
                <div className="lasma">
                    <img src="/images/traffic_person.png" alt="" />
                    <p>By: LASMA</p>
                    <img src="/images/traffic_icon.png" alt="" />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur. Porttitor viverra facilisis sit purus integer consectetur eros. Risus imperdiet faucibus mollis vel cursus dolor pretium tincidunt. Vitae vivamus sem a nisi porta in ultrices in. Aenean convallis morbi pretium egestas neque. Malesuada sed faucibus tristique sed fames vulputate. Volutpat porta amet suspendisse volutpat tellus. Sit dis vestibulum proin sed diam 
                    nulla nibh diam scelerisque.</p>

                <p>Cursus praesent volutpat quam facilisi quam facilisis faucibus laoreet. Felis fusce sed dolor pharetra nullam vestibulum bibendum tempor turpis. Purus rutrum a sed facilisis faucibus nisl tellus iaculis. Elit mattis adipiscing sapien eget elementum est ut gravida. Erat lectus volutpat eget nibh diam. Sodales massa hendrerit massa volutpat.
                Maecenas gravida habitant lorem amet mauris a. In tellus eu elementum.</p>
            </div>
            </div>
        </TrafficDetaiRap>
    )
}

export default NewsDetails