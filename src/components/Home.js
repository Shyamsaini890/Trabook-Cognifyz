import React from "react";
import "./Home.css";
import Rightimg from "./images/right1.png";
import vector from "./images/Vector 4855.svg";

const Home = () => {
  return (
    <>
      <div class="home">
        <div class="left">
          <h1 style={{ fontSize: "50px" }}>
            Get started your exciting
            <span style={{ color: "#FA7436" }}>journey</span> <br></br> with us.
          </h1>
          <p>
            A Team of experienced tourism professionals will provide you with
            the best <br></br> advice and tips for your desire place.{" "}
          </p>
          <button
            style={{
              border: "2px solid #FA7436",
              width: "150px",
              height: "50px",
              borderRadius: "5px",
              background: "none",
              color: "#FA7436",
              fontWeight: "bold",
            }}
          >
            Discover Now
          </button>
        </div>
        <div class="right">
          <img src={Rightimg} style={{ width: "400px", height: "400px" }} />
        </div>
      </div>
      <div class="homefooter">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "70%",
          }}
        >
          <div>
            <h4>
              Location <img src={vector} />
            </h4>
            <p style={{ color: "#666666" }}>Where are you going</p>
          </div>
          <div>
            <h4>
              Date
              <img src={vector} />
              <br></br>
            </h4>
            <p style={{ color: "#666666" }}>Where will you go</p>
          </div>
          <div>
            <h4>
              Guest
              <img src={vector} />
            </h4>
            <p style={{ color: "#666666" }}>Number of guest</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{
              border: "none",
              width: "150px",
              height: "50px",
              background: "#FA7436",
              borderRadius: "5px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Explore Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
