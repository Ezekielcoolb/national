import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const HomeSection = styled.section`
  position: relative;
  background-image: url("../images/home-img-bg.jpg");
  background-size: 100% 100%;
  background-position: center;
  height: 700px; /* Full height */
  display: flex;
  padding-left: 135px;
  padding-top: 161px;
  align-items: center;
//   justify-content: center;
  color: white;
  
  /* Dark overlay on the background */
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Adjust opacity as needed */
    z-index: 1;
  }

  /* Ensuring content sits above the dark overlay */
  .content {
    position: relative;
    z-index: 2;
    
    max-width: 570px;
  }

  h1 {
    font-size: 70px;
    font-weight: 700;
    line height: 75px;
    font-family: Bricolage Grotesque;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 14px;
    font-weight: 800;
    font-family: Inter;
    margin-bottom: 10px;
  }

  .buttons {
    display: flex;
    gap: 15px;
    justify-content: flex-start;
    
    button {
    width: 183.19px;
    height: 55px;
    font-family: Inter;
    font-weight: 600;
    line-height: 19.36px;
      padding: 0.8rem 1.5rem;
      font-size: 16px;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:first-child {
        background-color:  #56BF2A;; /* Green for Get Started */
        color: white;
      }

      &:last-child {
        background-color: transparent;
        color: white;
        border: 1px solid white; /* Outline button for Learn More */
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
const OtherSection = styled.div`
  font-family: Inter;

  .D-1 {
    background: linear-gradient(90deg, #f3f4f7 0%, rgba(254, 253, 253, 0) 100%);
    width: 48px;
    height: 48px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center; /* Correct typo here */
    color: #5c6a7f;
    font-size: 14px;
  }

  .influence {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 700;
    color: #112240;
    line-height: 21.6px;
    height: 183px;
    width: 370px;
    border-radius: 8px;
    border: 1px solid #e3e6ef;
    background: white;
    color: black;
    position: relative; /* Make sure influence is positioned relative */
    z-index: 2; /* Make sure it's above the .dots */
  }

  .dots {
    position: absolute;
    top: 1100px; /* Adjust positioning to be underneath the content */
    left: 0;
    width: 100%;
    height: 180px;
    background: url("../images/dot-img.png");
    background-color: white;
    z-index: 1; /* Ensure it stays below the content */
  }
`;

const Home = () => {
  return (
    <div>
      <HomeSection>
        <div className="content">
          <p>WELCOME TO ROAD USERS ASSOCIATION</p>
          <h1>The National Road Transport Organization.</h1>
          <div className="buttons">
            <button className="flex justify-around items-center">
              <div>Get Started</div>
              <div
                className="flex justify-center items-center"
                style={{
                  backgroundColor: "white",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                }}
              >
                <Icon
                  icon="weui:arrow-filled"
                  width="5.56"
                  height="14"
                  style={{ color: "#56bf2a" }}
                />
              </div>
            </button>
            <button>Learn More</button>
          </div>
        </div>
      </HomeSection>
      <OtherSection>
        <div className="container">
          <div
            style={{
              width: "100vw",
              backgroundColor: "#1c4f96",
              color: "white",
            }}
          >
            <p className="py-14 text-center">
              <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                RUA delivers for its individual and corporate members.{" "}
              </span>
              <a style={{ textDecoration: "white" }} href="#">
                Our Department
              </a>
            </p>

            {/* Dots background */}
            <div className="dots">

            </div>
            <div className="flex justify-center gap-7">
              <div className="influence justify-center px-7">
                <div className="flex justify-between items-center ">
                  <img
                    style={{
                      height: "34px",
                      width: "34px",
                      objectFit: "contain",
                      display: "block",
                      objectPosition: "top",
                    }}
                    src="./images/Icon.png"
                    alt="..."
                  />
                  <div className="D-1 items-center">D1</div>
                </div>
                <p style={{ lineHeight: "21.6px", marginTop: "20px" }}>
                  Influence
                </p>
              </div>

              <div className="influence justify-center px-7">
                <div className="flex justify-between items-center ">
                  <img
                    style={{
                      height: "34px",
                      width: "34px",
                      objectFit: "contain",
                      display: "block",
                      objectPosition: "top",
                    }}
                    src="./images/Icon.png"
                    alt="..."
                  />
                  <div className="D-1 items-center">D1</div>
                </div>
                <p style={{ lineHeight: "21.6px", marginTop: "20px" }}>
                  Intelligence
                </p>
              </div>

              <div className="influence justify-center px-7">
                <div className="flex justify-between items-center ">
                  <img
                    style={{
                      height: "34px",
                      width: "34px",
                      objectFit: "contain",
                      display: "block",
                      objectPosition: "top",
                    }}
                    src="./images/Icon.png"
                    alt="..."
                  />
                  <div className="D-1 items-center">D1</div>
                </div>
                <p style={{ lineHeight: "21.6px", marginTop: "20px" }}>
                  Access
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img></img>
            </div>
            <div>
              <p>THE VOICE OF ROAD TRANSPORT</p>
              <h2>Lorem ipsum dolor sit amet consectetur.</h2>
              <p>Lorem ipsum dolor sit amet consectetur . In ac facilisi ultrices nulla teus neOccaecat mollit magna nulla fugiat ex amet eu ipsum sint laborum duis. Esse ipsum laboris velit Lorem fugiat. Velit magna magna ullamco qui veniam laborum pariatur.ue in.
                haretra voluatqIrure aute proident cupidatat dolore sint. tuisarturient a egestas sed nulla nisi egestas. nisis
                objectPositionDo ad velit excepteur iruIrure qui deserunt id excepteur fugiat reprehenderit dolor ut veniam laboris nostrud dolore. 
                Sit dolore irure laboris incididunt reprehenderit anim Lorem fugiat quis irure. Id labore cillum do excepteur officia proident cillum eiusmod velit in. Et in aute adipisicing esse non fugiat dolor consectetur dolore proident nulla occaecat reprehenderit. Dolor nisi fugiat quis quis. Ex tempor occaecat incididunt aliqua deserunt anim cupidatat laborum eu ut tempor aliquip proident.Officia cillum qui nostrud ea nisi cupidatat veniam do. Minim consequat reprehenderit excepteur amet officia quis fugiat elit excepteur mollit cillum irure ex ad. Ipsum voluptate veniam mollit esse nisi reprehenderit tempor qui anim dolor nisi cupidatat officia amet. Ut quis ullamco in do quis.Cillum cillum voluptate ex minim. Non magna elit esse enim et eu sint mollit ad reprehenderit reprehenderit ex Lorem quis. Nisi ut ipsum cupidatat laboris et elit adipisicing consequat tempor ea duis deserunt esse. Irure officia ex proident magna magna quis aute aliqua.Ullamco quis consectetur ad excepteur ex incididunt do ipsum Lorem veniam amet officia ad. Mollit aliquip eiusmod excepteur cupidatat sint dolor nostrud nostrud exercitation occaecat in eu. Mollit qui labore Lorem fugiat incididunt est incididunt magna reprehenderit nisi anim cillum adipisicing. Dolore id commodo excepteur incididunt aute id consequat aliqua fugiat elit ad. Sit ex ipsum officia velit exercitation veniam ipsum minim minim. Laboris magna qui commodo ad deserunt in cupidatat mollit ullamco qui occaecat ad nisi.Ea ea quis irure et aute et ex. Commodo laborum eiusmod dolore proident laborum enim esse amet non ex. Excepteur nisi eu irure anim aute dolore duis culpa magna voluptate labore reprehenderit duis ipsum.re est aliquip culpa sint dolore magna culpa irure reprehenderit occaecat. Nostrud deserunt consequat eiusmod consequat commodo aliqua nulla fugiat sint deserunt ad. Proident pariatur reprehenderit cupidatat reprehenderit Lorem enim ullamco mollit aliquip ullamco sit qui anim amet. Occaecat duis id officia sint proident ea qui culpa adipisicing tempor laboris. Lorem culpa adipisicing enim exercitation consectetur amet dolore. Id aliquip nisi reprehenderit nisi. Esse ad duis commodo deserunt ad laborum enim sunt proident aliqua deserunt minim sint deserunt. </p>
            </div>
          </div>
        </div>
      </OtherSection>
    </div>
  );
};

export default Home;
