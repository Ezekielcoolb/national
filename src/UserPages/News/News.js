import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NewsRap = styled.div`
width: 100%;

.house-news {
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
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
  h2 {
    color: #112240;
    font-size: 18px;
    font-weight: 600;
    padding: 20px;
    padding-left: 130px;
  }
  h4 {
    color: #112240;
    font-size: 16px;
    font-weight: 600;
   
   
  }
  h3 {
    color: #112240;
    font-size: 16px;
    font-weight: 600;
    border-bottom: 1px solid #1122401F;
    padding: 20px;
  }
  p {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
    max-width: 387px;
  }
  span {
    color: #112240;
    font-size: 15px;
    font-weight: 500;
  }
  .lastma-div p {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .lastma-div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .new-left {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .news-divs {
    display: flex;
    gap: 100px;
  }
  .entire-news {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 30px;
  }
  .all-news-wrapper {
    background: #ffffff;
    border: 1px solid #1122401F;
    border-radius: 10px;
  }
  .news-divs:hover {
    background: #f2f2f2;
  }
`;

const News = () => {
     const navigate = useNavigate();
           const handleClick = () => {
        
            navigate("/users/newsDetails");
          };
  return (
    <NewsRap>
          <h2>News</h2>
          <div className="house-news">
      <div className="all-news-wrapper">
      <h3>Latest News</h3>
        <div className="entire-news">
          <div onClick={handleClick} className="news-divs">
            <img src="/images/news_img_1.png" alt="" />
            <div className="new-left">
              <p className="safety">Road Safety</p>
              <h4>Safety Measure For Safety</h4>
              <p>
                Like to know the secrets of transforming a 2-14 team into a 3x
                Super Bowl winning Dynasty?
              </p>
              <div className="lastma-div">
                <img src="/images/lastma_person.png" alt="" />
                <p>
                  <span>LASTMA</span>4 Sept, 2024 1:30PM
                </p>
              </div>
            </div>
          </div>
          <div onClick={handleClick} className="news-divs">
            <img src="/images/news_img_2.png" alt="" />
            <div className="new-left">
              <p className="safety">Road Safety</p>
              <h4>How collaboration makes us better designers</h4>
              <p>
              Lorem ipsum dolor sit amet consectetur. Eget ac nam pellentesque id tristique
               phasellus non. Proin aliquet urna.
              </p>
              <div className="lastma-div">
                <img src="/images/lastma_person.png" alt="" />
                <p>
                  <span>LASTMA</span>4 Sept, 2024 1:30PM
                </p>
              </div>
            </div>
          </div>
          <div onClick={handleClick} className="news-divs">
            <img src="/images/news_img_3.png" alt="" />
            <div className="new-left">
              <p className="safety">Road Safety</p>
              <h4>Safety Measure For Safety</h4>
              <p>
                Like to know the secrets of transforming a 2-14 team into a 3x
                Super Bowl winning Dynasty?
              </p>
              <div className="lastma-div">
                <img src="/images/lastma_person.png" alt="" />
                <p>
                  <span>LASTMA</span>4 Sept, 2024 1:30PM
                </p>
              </div>
            </div>
          </div>
          <div onClick={handleClick} className="news-divs">
            <img src="/images/news_img_4.png" alt="" />
            <div className="new-left">
              <p className="safety">Road Safety</p>
              <h4>Safety Measure For Safety</h4>
              <p>
                Like to know the secrets of transforming a 2-14 team into a 3x
                Super Bowl winning Dynasty?
              </p>
              <div className="lastma-div">
                <img src="/images/lastma_person.png" alt="" />
                <p>
                  <span>LASTMA</span>4 Sept, 2024 1:30PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </NewsRap>
  );
};

export default News;
